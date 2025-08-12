
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const ProductCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 overflow-hidden">
        <div className="bg-gray-100 p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 font-headline">{title}</h2>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-semibold mt-4 mb-3 text-gray-700 font-headline">{children}</h3>
);

const Note = ({ children }: { children: React.ReactNode }) => (
     <p className="text-xs italic mt-2 text-gray-500">*{children}</p>
);

export function FssaiStandardsModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-6xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-2 font-headline">
            FSSAI Standards for Dairy Products
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-4 pr-6">
             <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                <ProductCard title="2.1.1 General Standards for Milk and Milk Products">
                    <p className="font-medium leading-relaxed">The general standard provides overarching definitions for milk and milk products and guidance on the use of dairy terms in relation to foods to be offered to the consumer or for further processing.</p>
                    <SectionTitle>Definitions</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><b>Boiling:</b> Refers to the process of heating milk continuously to bring it to a boil at atmospheric pressure.</li>
                        <li><b>Analogue:</b> A product in which constituents not derived from milk replace, in part or in whole, any milk constituent(s) and the final product resembles, organoleptically and/or functionally, a milk product.</li>
                        <li><b>Composite milk product:</b> A product of which milk, milk products, or milk constituents are an essential part in terms of quantity in the final product.</li>
                        <li><b>Milk:</b> The normal mammary secretion derived from complete milking of a healthy milch animal, without any addition or extraction unless otherwise provided. It must be free from colostrum.</li>
                        <li><b>Milk Product:</b> A product obtained by processing of milk, which may contain permitted food additives and other ingredients.</li>
                        <li><b>Pasteurization:</b> A microbicidal heat treatment of milk to at least 63°C for 30 minutes or 72°C for 15 seconds.</li>
                        <li><b>Recombined milk:</b> A product from the combination of milk fat and milk-solids-non-fat in their preserved forms with or without potable water.</li>
                        <li><b>Reconstituted milk:</b> A product from the addition of potable water to the dried or concentrated form of milk.</li>
                        <li><b>Sterilisation:</b> Application of heat at high temperatures (at least 115°C for 15 minutes) to render milk or milk products commercially sterile.</li>
                        <li><b>Ultra High Temperature (UHT) treatment:</b> Heating milk to at least 135°C for one second or more in a continuous flow and then packing under aseptic conditions.</li>
                    </ul>
                    <SectionTitle>General Principles</SectionTitle>
                    <p className="font-medium leading-relaxed">Foods must be described or presented in a manner that ensures the correct use of dairy terms, protects consumers from being misled, and ensures fair trade practices.</p>
                </ProductCard>

                <ProductCard title="2.1.2 Standard for Milk">
                    <SectionTitle>Description</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><b>Species identified milk:</b> Milk from a specific animal (e.g., cow, buffalo).</li>
                        <li><b>Mixed Milk:</b> Any combination of species identified milk.</li>
                        <li><b>Standardized milk:</b> Milk standardized to specific fat and solids-not-fat percentages.</li>
                        <li><b>Low Lactose or Lactose free milk:</b> Milk in which lactose content has been significantly reduced through hydrolysis.</li>
                    </ul>
                    <SectionTitle>Compositional Requirements (Minimum)</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Class of Milk</TableHead>
                                    <TableHead>Minimum Milk Fat (per cent, m/m)</TableHead>
                                    <TableHead>Minimum Milk Solids-not-Fat (SNF) (per cent, m/m)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Buffalo Milk</td><td>5.0</td><td>9.0</td></TableRow>
                                <TableRow><td>Cow Milk</td><td>3.2</td><td>8.3</td></TableRow>
                                <TableRow><td>Goat or Sheep Milk</td><td>3.0</td><td>8.0</td></TableRow>
                                <TableRow><td>Camel Milk</td><td>2.0</td><td>6.0</td></TableRow>
                                <TableRow><td>Mixed Milk</td><td>4.5</td><td>8.5</td></TableRow>
                                <TableRow><td>Standardized Milk</td><td>4.5</td><td>8.5</td></TableRow>
                                <TableRow><td>Toned Milk</td><td>3.0</td><td>8.5</td></TableRow>
                                <TableRow><td>Double Toned Milk</td><td>1.5</td><td>9.0</td></TableRow>
                                <TableRow><td>Skimmed Milk</td><td>Not more than 0.5</td><td>8.7</td></TableRow>
                                <TableRow><td>Full Cream Milk</td><td>6.0</td><td>9.0</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <SectionTitle>Food Additives</SectionTitle>
                    <p className="font-medium leading-relaxed">Milk shall not contain any food additives, except for permitted carry-over food additives in products specified in 2.1.2 (1)(c) and specific additives in sterilized milk.</p>
                    <SectionTitle>Hygiene</SectionTitle>
                    <p className="font-medium leading-relaxed">Products must be prepared and handled in accordance with prescribed hygiene standards and conform to microbiological requirements.</p>
                    <SectionTitle>Labelling</SectionTitle>
                    <p className="font-medium leading-relaxed">The class of milk and heat treatment must be declared on the label. "Raw" must precede the name of milk if no heat treatment is applied.</p>
                </ProductCard>

                <ProductCard title="2.1.6 Standard for Khoa">
                    <SectionTitle>Description</SectionTitle>
                    <p className="font-medium leading-relaxed">Khoa or Mawa is a product obtained by partial removal of water from any variant of milk with or without added milk solids by heating under controlled conditions.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Requirement</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Total solids, minimum, % (m/m)</td><td>55.0</td></TableRow>
                                <TableRow><td>Milk fat, minimum, % (m/m), dry matter basis</td><td>30.0</td></TableRow>
                                <TableRow><td>Total ash, maximum, % (m/m)</td><td>6.0</td></TableRow>
                                <TableRow><td>Titratable acidity (as % lactic acid), maximum, %</td><td>0.9</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </ProductCard>

                 <ProductCard title="2.1.7 Standard for Cream and Malai">
                    <SectionTitle>Description</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><b>Cream:</b> Fluid product rich in fat, in the form of an emulsion of fat-in-skimmed milk, obtained by physical separation from cow or buffalo milk or a mixture.</li>
                        <li><b>Malai:</b> Fat-rich product prepared by boiling and cooling of milk, characterized by the presence of an insoluble mass, principally fat and denatured protein.</li>
                    </ul>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <p className="font-medium leading-relaxed">The product shall contain a minimum of 10.0% (m/m) milk fat. Acidity of the finished product, other than fermented and acidified creams, should not be more than 0.15% (as lactic acid).</p>
                    <SectionTitle>Labelling</SectionTitle>
                    <p className="font-medium leading-relaxed">The name of the food must be as specified, and the fat content must be indicated (e.g., "Low fat cream," "Medium fat cream," "High fat cream").</p>
                </ProductCard>

                <ProductCard title="2.1.8 Standard for Milk Fat Products">
                    <SectionTitle>Description</SectionTitle>
                    <p className="font-medium leading-relaxed">Fatty products derived exclusively from milk by processes that result in almost total removal of water and milk solids-not-fat.</p>
                    <SectionTitle>Compositional Requirements</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Milk Fat, Butter Oil</TableHead>
                                    <TableHead>Anhydrous Milk Fat, Anhydrous Butter Oil</TableHead>
                                    <TableHead>Ghee</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>0.4</td><td>0.1</td><td>0.5</td></TableRow>
                                <TableRow><td>Milk fat, minimum, % (m/m)</td><td>99.6</td><td>99.8</td><td>99.5</td></TableRow>
                                <TableRow><td>Butyro-refractometer Reading at 40°C</td><td>40.0 to 44.0</td><td>40.0 to 44.0</td><td>40.0 to 44.0</td></TableRow>
                                <TableRow><td>Reichert Meissl Value, minimum</td><td>24.0</td><td>24.0</td><td>24.0</td></TableRow>
                                <TableRow><td>FFA as Oleic Acid, maximum %</td><td>0.4</td><td>0.3</td><td>2.0</td></TableRow>
                                <TableRow><td>Baudouin Test</td><td>Negative</td><td>Negative</td><td>Negative</td></TableRow>
                                <TableRow><td>Iodine Value</td><td>-</td><td>-</td><td>25-38</td></TableRow>
                                <TableRow><td>Saponification value</td><td>-</td><td>-</td><td>205-235</td></TableRow>
                                <TableRow><td>Presence of Beta-sitosterol</td><td>Absent</td><td>Absent</td><td>Absent</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                     <SectionTitle>Fatty Acid Composition of Ghee</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Type of Fatty Acid</TableHead>
                                    <TableHead>Fatty Acid Composition (percentage)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>C4:0, Butyric acid</td><td>1-5</td></TableRow>
                                <TableRow><td>C6:0, Hexanoic acid</td><td>0.5-2.2</td></TableRow>
                                <TableRow><td>C16:0, Hexadecanoic acid</td><td>22-38</td></TableRow>
                                <TableRow><td>C18:0, Octadecanoic acid</td><td>8-19</td></TableRow>
                                <TableRow><td>C18:1 (cis 9) 9-Octadecenoic acid (Oleic acid)</td><td>19-32</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>Method for determination of adulteration of vegetable oil in ghee by RP-HPLC as notified vide FSSAI Office Order: File No. 1-90/FSSAI/SP (MS&A)/2009 dated 25th March, 2019</Note>
                </ProductCard>

                <ProductCard title="2.1.9 Standard for Butter">
                    <SectionTitle>Definition</SectionTitle>
                    <p className="font-medium leading-relaxed">Butter is a fatty product, principally a water-in-oil emulsion derived exclusively from milk or milk products. It can be of two types: Table butter and White butter/Cooking butter.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Table butter</TableHead>
                                    <TableHead>White butter / Cooking butter</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>16.0</td><td>-</td></TableRow>
                                <TableRow><td>Milk fat, minimum, % (m/m)</td><td>80.0</td><td>76.0</td></TableRow>
                                <TableRow><td>Milk solids-not-fat, maximum, % (m/m)</td><td>2.0</td><td>-</td></TableRow>
                                <TableRow><td>Common salt, maximum, % (m/m)</td><td>3.0</td><td>-</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>The extracted fat from butter must meet the standards for Ghee's Reichert Meissl value and Butyro-refractometer reading.</Note>
                </ProductCard>

                 <ProductCard title="2.1.10 Standard for Milk Powders and Cream Powder">
                    <SectionTitle>Description</SectionTitle>
                    <p className="font-medium leading-relaxed">Milk powders and cream powder are milk products obtained by partial removal of water from milk or cream, resulting in a powdered form.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Whole Milk Powder</TableHead>
                                    <TableHead>Partly Skimmed Milk Powder</TableHead>
                                    <TableHead>Skimmed Milk Powder</TableHead>
                                    <TableHead>Cream Powder</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture*, maximum, % (m/m)</td><td>5.0</td><td>5.0</td><td>5.0</td><td>5.0</td></TableRow>
                                <TableRow><td>Milk fat, % (m/m)</td><td>Min 26.0</td><td>{">1.5 and <26.0"}</td><td>1.5 (maximum)</td><td>42.0 (minimum)</td></TableRow>
                                <TableRow><td>Milk protein** in milk solids-not-fat, min, % (m/m)</td><td>34.0</td><td>34.0</td><td>34.0</td><td>34.0</td></TableRow>
                                <TableRow><td>Insolubility Index, maximum, ml</td><td>2.0</td><td>2.0</td><td>2.0</td><td>-</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>Moisture content does not include water of crystallization of lactose.</Note>
                    <Note>Protein content is 6.38 multiplied by the total nitrogen determined.</Note>
                </ProductCard>

                <ProductCard title="2.1.13 Standard for Fermented Milk Products">
                    <SectionTitle>Description</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><b>Fermented Milk:</b> Obtained by fermentation of milk by microorganisms, resulting in lower pH. This includes Dahi and Yoghurt.</li>
                        <li><b>Chakka:</b> Fermented and concentrated milk product obtained by partial removal of whey from Dahi or Yoghurt.</li>
                        <li><b>Shrikhand:</b> Semi-soft concentrated composite milk product obtained from chakka, with added milk fat and sugar.</li>
                    </ul>
                    <SectionTitle>Compositional Specifications (Yoghurt and Flavoured Dahi)</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Yoghurt and Flavoured Dahi</TableHead>
                                    <TableHead>Partly skimmed Yoghurt / Flavoured Partly Skimmed Dahi</TableHead>
                                    <TableHead>Skimmed Yoghurt / Flavoured Skimmed Dahi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Milk Fat, % (m/m)</td><td>Not less than 3.0 and not more than 15</td><td>More than 0.5 and less than 3.0</td><td>0.5 (maximum)</td></TableRow>
                                <TableRow><td>Milk solids-not-fat, minimum, % (m/m)</td><td>8.5</td><td>8.5</td><td>8.5</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <SectionTitle>Compositional Specifications (Chakka)</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Chakka</TableHead>
                                    <TableHead>Skimmed Milk Chakka</TableHead>
                                    <TableHead>Full Cream Chakka</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Total solids, minimum, % (m/m)</td><td>30.0</td><td>20.0</td><td>28.0</td></TableRow>
                                <TableRow><td>Milk fat, % (m/m), on dry basis</td><td>33.0 (minimum)</td><td>5.0 (maximum)</td><td>38.0 (minimum)</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </ProductCard>

                <ProductCard title="2.1.14 Standard for Ice Cream, Kulfi, etc.">
                    <SectionTitle>Description</SectionTitle>
                    <p className="font-medium leading-relaxed">Frozen milk products obtained by freezing a pasteurized mix from milk or other milk-derived products with sweeteners and other permitted non-dairy ingredients.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Ice cream or Kulfi</TableHead>
                                    <TableHead>Medium Fat Ice Cream or Kulfi</TableHead>
                                    <TableHead>Low Fat Ice Cream or Kulfi</TableHead>
                                </TableRow>
                            </TableHeader>
                             <TableBody>
                                <TableRow><td>Total Solids, minimum, % (m/m)</td><td>36.0</td><td>30.0</td><td>26.0</td></TableRow>
                                <TableRow><td>Weight, minimum, g/l</td><td>525.0</td><td>475.0</td><td>475.0</td></TableRow>
                                <TableRow><td>Milk Fat, % (m/m)</td><td>10.0 (minimum)</td><td>More than 2.5 and less than 10.0</td><td>2.5 (maximum)</td></TableRow>
                                <TableRow><td>Milk Protein*, minimum, % (m/m)</td><td>3.5</td><td>3.5</td><td>3.0</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <SectionTitle>Milk Ice or Milk Lolly</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Requirement</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Total Solids, minimum, % (m/m)</td><td>20.0</td></TableRow>
                                <TableRow><td>Milk Fat, maximum, % (m/m)</td><td>2.0</td></TableRow>
                                <TableRow><td>Milk Protein*, minimum, % (m/m)</td><td>3.5</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>Protein content is 6.38 multiplied by the total nitrogen determined.</Note>
                </ProductCard>

                <ProductCard title="2.1.16 Standard for Chhana and Paneer">
                    <SectionTitle>Definition</SectionTitle>
                    <p className="font-medium leading-relaxed">Chhana or Paneer is the product obtained from any variant of milk by precipitation with permitted acidulants and heating.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Chhana or Paneer</TableHead>
                                    <TableHead>Medium fat Chhana or Paneer</TableHead>
                                    <TableHead>Low fat Chhana or Paneer</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>65.0 (for Chhana) / 60.0 (for Paneer)</td><td>65.0 (for Chhana) / 60.0 (for Paneer)</td><td>70.0 (for Chhana) / 70.0 (for Paneer)</td></TableRow>
                                <TableRow><td>Milk fat, % (m/m), dry matter basis</td><td>50.0 (minimum)</td><td>More than 20.0 and less than 50.0</td><td>20.0 (maximum)</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                     <SectionTitle>Labelling</SectionTitle>
                    <p className="font-medium leading-relaxed">The name must be declared as per the composition. "Low Fat" or "Medium Fat" products must be sold in sealed packages with appropriate declarations.</p>
                </ProductCard>

                <ProductCard title="2.1.17 Standard for Cheese and Cheese Products">
                    <SectionTitle>Description</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><b>Cheese:</b> A ripened or unripened product from the coagulation of milk protein.</li>
                        <li><b>Processed Cheese:</b> Obtained by grinding, mixing, melting and emulsifying one or more varieties of cheeses with the aid of heat and emulsifying agents.</li>
                    </ul>
                    <SectionTitle>Compositional Requirements (Examples)</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Moisture, Maximum, % (m/m)</TableHead>
                                    <TableHead>Milk fat, Minimum, % (dry basis)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Hard-Pressed Cheese</td><td>39.0</td><td>48.0</td></TableRow>
                                <TableRow><td>Cheddar Cheese</td><td>39.0</td><td>48.0</td></TableRow>
                                <TableRow><td>Mozzarella Cheese</td><td>60.0</td><td>35.0</td></TableRow>
                                <TableRow><td>Processed Cheese</td><td>47.0</td><td>40.0</td></TableRow>
                                <TableRow><td>Processed Cheese Spread</td><td>60.0</td><td>40.0</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                     <SectionTitle>Labelling</SectionTitle>
                    <p className="font-medium leading-relaxed">The name of the food product must be 'cheese' or a well-established variety name. Special declarations are required for surface-treated cheeses (e.g., "SURFACE TREATED WITH NATAMYCIN").</p>
                </ProductCard>

                <ProductCard title="2.1.18 Standard for Edible Casein Products">
                    <SectionTitle>Description</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><b>Edible Acid Casein:</b> Product obtained by separating, washing and drying the acid precipitated coagulum of skimmed milk.</li>
                        <li><b>Edible Rennet Casein:</b> Product obtained after washing and drying the coagulum remaining after separating whey from skimmed milk coagulated by non-animal rennet.</li>
                        <li><b>Edible Caseinate:</b> Dry product obtained by reaction of edible casein or casein curd coagulum with food grade neutralising agents followed by drying.</li>
                    </ul>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                     <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameter</TableHead>
                                    <TableHead>Edible Acid Casein</TableHead>
                                    <TableHead>Edible Rennet Casein</TableHead>
                                    <TableHead>Edible Caseinate</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>12.0</td><td>12.0</td><td>8.0</td></TableRow>
                                <TableRow><td>Milk fat, maximum, % (m/m)</td><td>2.0</td><td>2.0</td><td>2.0</td></TableRow>
                                <TableRow><td>Milk protein*, minimum, % (m/m), dry matter basis</td><td>90.0</td><td>84.0</td><td>88.0</td></TableRow>
                                <TableRow><td>Casein in protein, minimum, % (m/m)</td><td>95.0</td><td>95.0</td><td>95.0</td></TableRow>
                                <TableRow><td>Lactose**, maximum, % (m/m)</td><td>1.0</td><td>1.0</td><td>1.0</td></TableRow>
                                <TableRow><td>Total ash including P2O5, % (m/m)</td><td>2.5 (maximum)</td><td>7.5 (minimum)</td><td>-</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>Protein content is 6.38 multiplied by the total nitrogen determined.</Note>
                    <Note>Lactose content is expressed as anhydrous lactose.</Note>
                </ProductCard>

                <ProductCard title="2.1.20 Standards for Edible Lactose">
                    <SectionTitle>Description</SectionTitle>
                    <p className="font-medium leading-relaxed">Lactose is a white to light yellow crystalline, slightly sweet disaccharide sugar found in milk.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameters</TableHead>
                                    <TableHead>Limits</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Total moisture, maximum, % (m/m)</td><td>6.0</td></TableRow>
                                <TableRow><td>Lactose, minimum, % (m/m) on dry basis</td><td>99.0</td></TableRow>
                                <TableRow><td>Sulphated ash, maximum, % (m/m)</td><td>0.3</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </ProductCard>

                <ProductCard title="2.1.22 Whey Protein Concentrate">
                    <SectionTitle>Description</SectionTitle>
                    <p className="font-medium leading-relaxed">A product obtained by removing non-protein constituents from whey by physical separation techniques, followed by drying.</p>
                    <SectionTitle>Compositional Specifications</SectionTitle>
                     <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameters</TableHead>
                                    <TableHead>Limits</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>6.0</td></TableRow>
                                <TableRow><td>Milk Protein**, minimum, % (m/m)</td><td>35.0</td></TableRow>
                                <TableRow><td>Milk Fat, maximum, % (m/m)</td><td>10</td></TableRow>
                                <TableRow><td>Scorched particles, maximum</td><td>Disc B (15 mg)</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>Protein content is 6.38 multiplied by the total nitrogen determined.</Note>
                </ProductCard>

                <ProductCard title="2.1.23 Standards for Cow or Buffalo Colostrum and Colostrum products">
                    <SectionTitle>Description</SectionTitle>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><b>Colostrum:</b> Lacteal secretion from the mammary glands of a cow or buffalo obtained up to three to five days after parturition.</li>
                      <li><b>Colostrum-based products:</b> Processed products from colostrum.</li>
                      <li><b>Colostrum powder:</b> A colostrum-based product obtained by drying colostrum.</li>
                    </ul>
                     <SectionTitle>Compositional Specifications (Colostrum)</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameters</TableHead>
                                    <TableHead>Requirements</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>80.0</td></TableRow>
                                <TableRow><td>Protein*, minimum, % (m/m)</td><td>7.0</td></TableRow>
                                <TableRow><td>Fat, minimum, % (m/m)</td><td>4.0</td></TableRow>
                                <TableRow><td>Immunoglobulins, minimum, % (m/m)</td><td>1.8</td></TableRow>
                                <TableRow><td>Lactoferrin, minimum, % (m/m)</td><td>0.2</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                     <SectionTitle>Compositional Specifications (Colostrum Powder)</SectionTitle>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Parameters</TableHead>
                                    <TableHead>Requirements</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><td>Moisture, maximum, % (m/m)</td><td>4.0</td></TableRow>
                                <TableRow><td>Protein*, minimum, % (m/m)</td><td>40.0</td></TableRow>
                                <TableRow><td>Fat, minimum, % (m/m)</td><td>17.5</td></TableRow>
                                <TableRow><td>Immunoglobulins, minimum, % (m/m)</td><td>12.5</td></TableRow>
                                <TableRow><td>Lactoferrin, minimum, % (m/m)</td><td>1.2</td></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <Note>Protein content is 6.38 multiplied by the total nitrogen determined.</Note>
                </ProductCard>

            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

    