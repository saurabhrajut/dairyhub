
"use client"

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

const platformTests = [
    {
        id: "organoleptic",
        title: "Organoleptic Test",
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
    {
        id: "ts-snf",
        title: "Total Solids (TS) and Solid-Not-Fat (SNF)",
        content: `
            <p>It is done for assessing the quality of milk and for payment purpose. The doubtful quality milk is subjected to laboratory tests. The advantage is that it is quick and cheap.</p>
            <p class="mt-2">Values can be obtained by using the formulas:</p>
            <pre class="bg-muted p-2 rounded-md font-mono text-sm">TS (%) = 0.25 (L) + 1.22 fat % + 0.72</pre>
            <pre class="bg-muted p-2 rounded-md font-mono text-sm mt-1">SNF = TS - Fat %</pre>
            <p class="mt-2 text-xs">Where L = Lactometer reading</p>
            <h4 class="font-semibold mt-2">Interpretation:</h4>
            <p>The milk with lesser quality are rejected.</p>
        `
    },
    {
        id: "lactometer",
        title: "Test with Lactometer",
        content: `
            <p>It is used for payment purpose, and to determine whether the milk is adulterated with water. The advantage is that it is cheap and quick. The disadvantage is that it can be inaccurate because it is affected by the temperature and fat percentage of the milk.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>Adjust the temperature of the milk to 50°F.</li>
                <li>Fill a glass jar to about two third volume of it with milk.</li>
                <li>Lower the lactometer into the milk with it touching the sides of the jar.</li>
                <li>Add the milk to the brim of the jar.</li>
                <li>Record the lactometer reading (L).</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>Normal readings range from 1.028 to 1.033, and the latter two values, 28 and 33, are commonly used to represent degrees. The lactometer reading should be combined with a fat test if possible. If the milk is adulterated with water, the lactometer reading would sink higher than the ‘M’ mark on the lactometer. Such milk is rejected.</p>
        `
    },
    {
        id: "freezing",
        title: "Freezing Point Test",
        content: `
            <p>It is done as a confirmatory test for density and adulteration of water. The advantage is that it is more accurate than lactometer.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <p>According to the supplier's operating instructions, the milk sample is measured with a sample of pure water using the Cryoscope.</p>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>The Freezing Point Depression refers to the difference between the two samples (FPD). There is an indication that water has been added to the milk if the observed freezing point is less than -0.530 °C.</p>
        `
    },
    {
        id: "sedimentation",
        title: "Sedimentation Test",
        content: `
            <p>It is done to determine the cleanliness of the milk. The advantage is that it is cheap.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
             <ul class="list-disc list-inside mt-1">
                <li>Take a sample from the well mixed container of milk.</li>
                <li>Filter the milk through the disc held in the sediment tester, so that a filtration area of 28mm in diameter is exposed.</li>
                <li>Remove the disc (cotton) from the tester after filtration.</li>
                <li>Compare the lintine cotton disc with the standard disc.</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>The five standard grades can then be applied to milk: Excellent, Good, Fair, Poor, and Very Bad. The poor or very bad quality milk is rejected based on comparison with the standard disc.</p>
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
        id: "resazurin",
        title: "Resazurin Test",
        content: `
            <p>This test is conducted to determine the hygiene and the bacterial content of the milk.</p>
            <h4 class="font-semibold mt-2">Procedure:</h4>
            <ul class="list-disc list-inside mt-1">
                <li>Take a sample from a well mixed container of milk.</li>
                <li>Pour 10ml of milk sample into the previously sterilized test tube.</li>
                <li>Add 1ml of Resazurin solution in the test tube. Mix the milk and dye thoroughly for 2 to 3 times by inverting the test tube.</li>
                <li>Place the test tube in a water bath at a temperature of 37.5 °C for 2 minutes.</li>
                <li>Remove the test tube from the water bath and compare the colour with the standard disc. (In other words, greater the number of organisms present in the milk, more quickly the dye is reduced.)</li>
            </ul>
            <h4 class="font-semibold mt-2">Inference:</h4>
            <p>The different standards for the disc are given in the table below.</p>
            <Table class="mt-2">
              <TableHeader>
                <TableRow>
                  <TableHead>Disc number</TableHead>
                  <TableHead>Colour</TableHead>
                  <TableHead>Grade of milk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>6</TableCell><TableCell>Blue</TableCell><TableCell>Excellent</TableCell></TableRow>
                <TableRow><TableCell>5</TableCell><TableCell>Light Blue</TableCell><TableCell>Very Good</TableCell></TableRow>
                <TableRow><TableCell>4</TableCell><TableCell>Purple</TableCell><TableCell>Good</TableCell></TableRow>
                <TableRow><TableCell>3</TableCell><TableCell>Purple Pink</TableCell><TableCell>Fair</TableCell></TableRow>
                <TableRow><TableCell>2</TableCell><TableCell>Light Pink</TableCell><TableCell>Poor</TableCell></TableRow>
                <TableRow><TableCell>1</TableCell><TableCell>Pink</TableCell><TableCell>Bad</TableCell></TableRow>
                <TableRow><TableCell>0</TableCell><TableCell>White</TableCell><TableCell>Very Bad</TableCell></TableRow>
              </TableBody>
            </Table>
        `
    }
];

const preservativesData = [
    {
        title: 'Neutralizers (NaOH, Na₂CO₃, NaHCO₃)',
        purpose: 'To neutralize developed acidity in sour milk.',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Rosolic Acid Test</h4>
                <p><strong>Principle:</strong> Rosolic acid is an indicator which gives a red colour in alkaline condition.</p>
                <ol>
                    <li>Take 10 ml of milk in a test tube and add an equal volume of ethyl alcohol (95%).</li>
                    <li>Add a few drops of 0.1% rosolic acid solution and mix.</li>
                    <li>Appearance of a <strong>rose-red colour</strong> indicates the presence of neutralizers, whereas pure milk turns brownish.</li>
                </ol>
                <h4 class="mt-4">Method 2: Alkalinity of Ash Test</h4>
                <p><strong>Principle:</strong> If a neutralizer has been added, the ash of the milk will have a higher alkalinity compared to pure milk.</p>
                <ol>
                    <li>Take 20 ml of milk in a silica crucible.</li>
                    <li>Evaporate the water and ash the contents in a muffle furnace at 550°C.</li>
                    <li>Dissolve the ash in 10 ml of distilled water and titrate it against 0.1 N HCl.</li>
                    <li>A titre value of more than 1.2 ml of 0.1 N HCl indicates the presence of neutralizers.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part II) 1961 (Reaffirmed 1997)</p>
            </div>
        `
    },
    {
        title: 'Boric Acid and Borates',
        purpose: 'Used as a preservative.',
        content: `
            <div class="prose max-w-none prose-blue">
                <p><strong>Principle:</strong> Boric acid and its salts give a red colour with turmeric paper.</p>
                <ol>
                    <li>Take 5 ml of milk in a test tube and add 1 ml of concentrated HCl.</li>
                    <li>Mix well, then dip a strip of turmeric paper into it.</li>
                    <li>Dry the paper strip and observe the colour change.</li>
                    <li>A <strong>red colour</strong> on the paper indicates the presence of boric acid.</li>
                    <li>Then add a drop of ammonium hydroxide solution.</li>
                    <li>A change from red to <strong>dark-green</strong> confirms the presence of boric acid.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part I) 1961 (Reaffirmed 2003)</p>
            </div>
        `
    },
    {
        title: 'Formalin (Formaldehyde)',
        purpose: 'A powerful preservative to extend shelf life illegally.',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Hehner Test</h4>
                <p><strong>Principle:</strong> Formaldehyde gives a violet colour with ferric salts in the presence of concentrated sulfuric acid.</p>
                <ol>
                    <li>Take 10 ml of milk sample in a test tube.</li>
                    <li>Slowly add 0.5 ml of 10% ferric chloride solution.</li>
                    <li>Add 5 ml of concentrated sulfuric acid down the side of the test tube so that it forms a separate layer at the bottom.</li>
                    <li>Formation of a <strong>violet to purple ring</strong> at the junction of the two liquids indicates the presence of formalin.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part II) 1961 (Reaffirmed 1997)</p>

                <h4 class="mt-4">Method 2: Chromotropic Acid Test</h4>
                 <p><strong>Principle:</strong> Formaldehyde reacts with chromotropic acid to form a colored compound.</p>
                <ol>
                    <li>Take 1 ml of milk in a test tube.</li>
                    <li>Add 1 ml of chromotropic acid reagent and mix well.</li>
                    <li>Appearance of a <strong>yellow color</strong> confirms the presence of formalin, whereas the control sample remains white.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part I) 1961 (Reaffirmed 2003)</p>
            </div>
        `
    },
     {
        title: 'Hydrogen Peroxide (H₂O₂)',
        purpose: 'Used as a preservative, especially where refrigeration is not available.',
        content: `
            <div class="prose max-w-none prose-blue">
                <h4>Method 1: Vanadium Pentoxide Test</h4>
                <ol>
                    <li>Add 10 to 20 drops of vanadium pentoxide reagent to 10 ml of milk and mix.</li>
                    <li>Appearance of a <strong>pink or red colour</strong> indicates the presence of hydrogen peroxide.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> A.O.A.C 17th edn, 2000 Official Method 957.08</p>
                
                <h4 class="mt-4">Method 2: Para-phenylenediamine Test</h4>
                <p><strong>Principle:</strong> Hydrogen peroxide oxidizes para-phenylenediamine, changing its colour from yellow to blue.</p>
                <ol>
                    <li>Take 2 ml of milk in a test tube and add an equal volume of raw milk.</li>
                    <li>Add 2 drops of 2% para-phenylenediamine solution and shake well.</li>
                    <li>Appearance of a <strong>blue colour</strong> confirms the presence of hydrogen peroxide.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part I) 1961 (Reaffirmed 2003)</p>
                
                <h4 class="mt-4">Method 3: Potassium Iodide & Starch Test</h4>
                <ol>
                    <li>Take 1 ml of milk and add 1 ml of potassium iodide-starch reagent.</li>
                    <li>Appearance of a <strong>blue color</strong> indicates the presence of H₂O₂.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> Sharma, R.; Rajput, Y.S. and Naik, N.L. (2012). NDRI Publication No. 88/2012</p>
            </div>
        `
    },
    {
        title: 'Salicylic Acid & Benzoic Acid',
        purpose: 'Used as preservatives.',
        content: `
             <div class="prose max-w-none prose-blue">
                <p><strong>Principle:</strong> These acids are extracted with ether and then identified with ferric chloride, which produces a characteristic colour.</p>
                <ol>
                    <li>Acidify 10 ml of milk with dilute HCl and extract with 50-100 ml of ethyl ether.</li>
                    <li>Evaporate the ether layer to get the residue.</li>
                    <li>Dissolve the residue in warm water and add a few drops of 0.5% neutral ferric chloride solution.</li>
                    <li>A <strong>buff-colored (salmon) precipitate</strong> indicates Benzoic Acid. A <strong>violet colour</strong> indicates Salicylic Acid.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> A.O.A.C 17th edn, Official method 975.30</p>
            </div>
        `
    },
    {
        title: 'Hypochlorites & Chloramines',
        purpose: 'Used as sterilizing agents, but their presence indicates contamination.',
        content: `
            <div class="prose max-w-none prose-blue">
                <p><strong>Principle:</strong> These compounds liberate iodine from potassium iodide, which then gives a blue colour with starch.</p>
                <ol>
                    <li>To 5 ml of milk, add 1.5 ml of potassium iodide solution.</li>
                    <li>If there's no change, add 4 ml of dilute HCl and mix.</li>
                    <li>Place the tube in a water bath at 85°C for 10 minutes. Cool rapidly.</li>
                    <li>Add 0.5-1.0 ml of starch solution to the liquid below the curd.</li>
                    <li>A <strong>blue-purple colour</strong> indicates the presence of chlorine compounds. The intensity of the colour can indicate the approximate concentration.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> A.O.A.C 17th edn, 2000, Official Method 922.08</p>
            </div>
        `
    }
];

const adulterantsData = [
    {
        title: 'Sucrose (Cane Sugar)',
        purpose: 'To increase the SNF content and density (CLR) of milk, often after adding water.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Qualitative Method: Modified Seliwanoff’s Method</h4>
                <p><strong>Principle:</strong> Fructose in cane sugar reacts with resorcinol in HCl to give red colour.</p>
                <ol>
                    <li>Take 1 ml of milk and add 1 ml of 0.5% resorcinol solution.</li>
                    <li>Heat in a boiling water bath for 5 minutes.</li>
                    <li>A <strong>deep red colour</strong> indicates the presence of sucrose. Pure milk remains white.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part I) 1961 (Reaffirmed 2003)</p>
            </div>
        `
    },
    {
        title: 'Starch & Other Cereal Flours',
        purpose: 'To increase the SNF content and thickness of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Starch forms a purple-blue complex with iodine.</p>
                <ol>
                    <li>Boil 5.0 ml of milk and cool to room temperature.</li>
                    <li>Add 1-2 drops of iodine solution. A <strong>blue colour</strong> indicates the presence of starch, which disappears on boiling and reappears on cooling.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part I) 1961 (Reaffirmed 2003)</p>
            </div>
        `
    },
    {
        title: 'Cellulose',
        purpose: 'To increase the SNF content of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Cellulose gives a blue colour with Iodine-Zinc Chloride reagent but not with plain iodine solution.</p>
                <ol>
                    <li>Take 10g of milk, add 50ml hot water and stir. Pour on a nylon cloth and wash the residue.</li>
                    <li>Scrape the residue and place it on a spotting plate.</li>
                    <li>Stain a part with Iodine-Zinc Chloride reagent and another with iodine solution.</li>
                    <li>A <strong>blue colour</strong> with the first reagent but not the second confirms cellulose.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> Manual Methods of Analysis for Adulterants & Contaminants in Foods. I.C.M.R 1990 page 27</p>
            </div>
        `
    },
    {
        title: 'Urea',
        purpose: 'To increase the non-protein nitrogen (NPN) content, which falsely inflates protein estimation and also increases SNF.',
        content: `
            <div class="prose max-w-none prose-green">
                <h4>Method 1: DMAB Reagent Method</h4>
                <p><strong>Principle:</strong> Urea forms a yellow complex with p-dimethylaminobenzaldehyde (DMAB) in a slightly acidic solution.</p>
                <ol>
                    <li>Take 1 ml of milk in a test tube.</li>
                    <li>Add 1 ml of 1.6% DMAB reagent.</li>
                    <li>A <strong>distinct yellow colour</strong> indicates added urea, whereas a slight yellow colour is due to natural urea (natural limit ~70mg/100ml).</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> Bector, B.S., et al. (1998). Indian Dairyman, 50(4): 59-62</p>
            </div>
        `
    },
    {
        title: 'Glucose',
        purpose: 'To increase the SNF of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Using a modified Barfoed's test, glucose reduces cupric ions to cuprous, which then reduces phosphomolybdic acid to form a blue compound.</p>
                <ol>
                    <li>Take 1 ml of milk, add 1 ml of modified Barfoed’s reagent.</li>
                    <li>Heat in a boiling water bath for 3 min, then cool.</li>
                    <li>Add 1 ml of phosphomolybdic acid reagent.</li>
                    <li>Immediate formation of a <strong>deep blue color</strong> indicates added glucose.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> Manual Methods of Analysis for Adulterants and Contaminants in Foods, I.C.M.R 1990, page 28</p>
            </div>
        `
    },
    {
        title: 'Detergent',
        purpose: 'Added to emulsify external fat (vegetable oil) into milk to create synthetic milk.',
        content: `
            <div class="prose max-w-none prose-red">
                <p><strong>Principle:</strong> Anionic detergents form a complex with the cationic dye methylene blue. This complex is soluble in chloroform.</p>
                <ol>
                    <li>Take 1 ml of milk, add 1 ml of methylene blue solution and then 2 ml of chloroform.</li>
                    <li>Vortex for 15 seconds and then centrifuge at 1100 rpm for 3 minutes.</li>
                    <li>A more <strong>intense blue colour in the lower (chloroform) layer</strong> indicates the presence of detergent. If the upper layer is more intense, the detergent is absent.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> Rajput, Y.S., et al. (2006). Indian Patent Office file no. 1970/Del/2006</p>
            </div>
        `
    },
    {
        title: 'Ammonium Compounds (Sulphates)',
        purpose: 'To increase the lactometer reading by increasing the density of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Sulphates precipitate with Barium Chloride (BaCl₂).</p>
                <ol>
                    <li>Take 10 ml of milk and add 10 ml of Trichloroacetic acid (TCA) to coagulate it.</li>
                    <li>Filter the milk and take 5 ml of the clear filtrate.</li>
                    <li>Add a few drops of 5% BaCl₂ solution.</li>
                    <li>Formation of a <strong>milky-white precipitate</strong> indicates the presence of added sulphates.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> Sharma, R., et al. (2012). NDRI Publication No. 88/2012</p>
            </div>
        `
    },
    {
        title: 'Vegetable/Refined Oil (Foreign Fat)',
        purpose: 'To replace natural milk fat with cheaper vegetable oil to increase profit.',
        content: `
            <div class="prose max-w-none prose-green">
                 <h4>Butyro-Refractometer (BR) Reading Method</h4>
                 <p><strong>Principle:</strong> Most vegetable oils have a higher refractive index than pure milk fat (ghee).</p>
                <ol>
                    <li>Isolate fat from the milk sample using a modified Gerber butyrometer.</li>
                    <li>Take the BR reading of the extracted fat at 40°C.</li>
                    <li>Pure milk fat has a BR reading of 40-43. Any reading higher than this range suggests the presence of foreign fat.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> IS 1479 (Part I) – 1960 (Reaffirmed 2003)</p>
                <h4 class="mt-4">Baudouin Test for Vanaspati</h4>
                <p><strong>Principle:</strong> Vanaspati is required to contain 5% sesame oil. The sesamol from this oil reacts with furfural to give a red color.</p>
                <ol>
                    <li>Extract ghee from the milk sample.</li>
                    <li>Take 5g of melted fat, add 5ml concentrated HCl and 0.4ml of 2% furfural solution. Vortex for 2 minutes.</li>
                    <li>A <strong>pink or red color</strong> in the acid layer indicates vanaspati adulteration.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Mineral Oil',
        purpose: 'A non-edible oil used as a cheap adulterant.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Mineral oil does not saponify (turn into soap) with alkali, unlike edible fats, causing turbidity.</p>
                <ol>
                    <li>Take 1g of clarified fat and add 5ml of 0.5N alcoholic KOH.</li>
                    <li>Reflux in boiling water for 10 minutes.</li>
                    <li>Add 5ml of distilled water to the saponified solution.</li>
                    <li><strong>Turbidity</strong> indicates the presence of mineral oil.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Animal Body Fat (e.g., Lard)',
        purpose: 'Used as a cheap adulterant for ghee.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Based on the time taken for ghee to become opaque at a specific temperature.</p>
                <ol>
                    <li>Melt 5g of ghee at 50°C.</li>
                    <li>Transfer to a 23°C water bath and record the time taken for the sample to become opaque.</li>
                    <li><strong>Result:</strong> Buffalo ghee takes 14-15 min, cow ghee 18-19 min. A shorter time suggests animal body fat, a longer time suggests vegetable oil.</li>
                </ol>
            </div>
        `
    },
    {
        title: 'Pond Water',
        purpose: 'To increase the volume of milk. Pond water is heavier than tap water.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> This method detects nitrates/nitrites present in pond water from agricultural fertilizers.</p>
                <ol>
                    <li>Rinse a test tube with the milk sample and drain.</li>
                    <li>Add 1 or 2 drops of 2% diphenylamine solution along the side of the test tube.</li>
                    <li>If the sides of the test tube turn <strong>blue</strong>, the milk contains pond water.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> Sharma, R.; Rajput, Y.S. and Naik, N.L. (2012). NDRI Publication No. 88/2012</p>
            </div>
        `
    },
    {
        title: 'Skimmed Milk Powder (SMP) in Natural Milk',
        purpose: 'To illegally increase the SNF content of natural milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> The proteins in reconstituted milk powder contain reducing groups that react with phosphomolybdic acid on boiling to give a blue colour.</p>
                <ol>
                    <li>Centrifuge 50 ml of milk to separate the cream.</li>
                    <li>Coagulate the skim milk portion with acetic acid.</li>
                    <li>Wash the precipitate, then add 2 ml of 1% phosphomolybdic acid and boil for 15 minutes.</li>
                    <li>The curd from pure milk will be greenish, whereas the curd from a sample containing SMP will be <strong>bluish</strong>.</li>
                </ol>
                 <p class="text-xs mt-2"><strong>Ref:</strong> Journal of Food Science and Technology, Vol 22 (1985)</p>
            </div>
        `
    },
    {
        title: 'Gelatine',
        purpose: 'Added to increase the thickness and SNF content of milk.',
        content: `
            <div class="prose max-w-none prose-green">
                <p><strong>Principle:</strong> Gelatine forms a yellow precipitate with picric acid.</p>
                <ol>
                    <li>Add acid mercuric nitrate solution to 10 ml of milk and filter.</li>
                    <li>To the filtrate, add an equal volume of saturated aqueous picric acid solution.</li>
                    <li>A <strong>yellow precipitate</strong> indicates the presence of gelatine.</li>
                </ol>
                <p class="text-xs mt-2"><strong>Ref:</strong> A.O.A.C 17th edn, 2000, Official Method - 920.106</p>
            </div>
        `
    }
];

export function AdulterationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-5xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl sm:text-3xl text-center">Raw Milk Quality & Adulteration</DialogTitle>
          <DialogDescription className="text-center">
            A guide to Platform Tests and detecting adulterants in milk.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <section id="platform-tests" className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2 mb-6 font-headline">Platform Tests for Raw Milk</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    Platform tests are rapid quality assessments performed at the milk reception dock to quickly judge if a batch of milk is acceptable. These tests are crucial for preventing low-quality or adulterated milk from being mixed with good quality supplies.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {platformTests.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="mt-4 p-4 bg-blue-50/50 rounded-lg">
                    <h4 className="font-bold text-blue-800">Conclusion on Platform Tests</h4>
                    <p className="text-sm text-blue-700 mt-2">These tests must be quick, accurate, and dependable because the quality of milk deteriorates over time, hampering the quality of the final product. A milk processor can only be confident in the quality of raw milk if some basic quality tests are performed on each can or container with the objective of detecting milk of inferior quality, in order to prevent it from being mixed with high-grade milk.</p>
                </div>
            </section>
            
            <section id="preservatives" className="mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-red-200 pb-2 mb-6 font-headline">Detecting Preservatives in Milk</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    By law, no preservative of any type is permitted in milk. Preservatives are generally added to milk when chilling or transport facilities are inadequate. The common preservatives used are neutralizers, boric acid, formalin, etc.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {preservativesData.map((item, index) => (
                        <AccordionItem key={`preservative-${index}`} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <p className="font-semibold text-gray-600 mb-2">Purpose: {item.purpose}</p>
                                <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            <section id="adulterants" className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-green-200 pb-2 mb-6 font-headline">Detecting Common Adulterants</h2>
                 <p className="mb-6 text-gray-700 leading-relaxed">
                    Adulterants are substances added to milk to increase its volume or solids-not-fat content to deceive quality tests. Common adulterants include sugar, starch, urea, and vegetable oil.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {adulterantsData.map((item, index) => (
                        <AccordionItem key={`adulterant-${index}`} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <p className="font-semibold text-gray-600 mb-2">Purpose: {item.purpose}</p>
                                <div className="prose max-w-none prose-sm" dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
            
            <footer className="text-center mt-12 py-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">This guide is for informational purposes only. Always adhere to official laboratory standards and safety protocols.</p>
            </footer>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
    

    