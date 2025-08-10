
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
import { adulterantsData, preservativesData } from "@/lib/data"
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
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2 mb-6 font-headline">Detecting Preservatives in Milk</h2>
                <p className="mb-6 text-gray-700 leading-relaxed">
                    By law, no preservative of any type is permitted in milk. Preservatives are generally added to milk when chilling or transport facilities are inadequate. The common preservatives used are neutralizers, boric acid, formalin, etc.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {preservativesData.map((item, index) => (
                        <AccordionItem key={`preservative-${index}`} value={`item-${index}`}>
                            <AccordionTrigger className="font-semibold text-left">{item.title}</AccordionTrigger>
                            <AccordionContent>
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
