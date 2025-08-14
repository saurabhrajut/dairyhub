
"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useLanguage } from "@/context/language-context";
import { dairyIndustryContent } from "@/lib/content/dairy-industry-content";

const SectionTitle = ({ title, id }: { title: string, id: string }) => (
    <h2 id={id} className="text-2xl font-bold text-primary mt-8 mb-4 border-b-2 border-primary/20 pb-2 scroll-mt-24 font-headline">
        {title}
    </h2>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
        <h4 className="text-lg font-bold text-primary mb-2 font-headline">{title}</h4>
        <div className="space-y-3 text-gray-700 text-sm leading-relaxed prose-sm max-w-none break-words">
            {children}
        </div>
    </div>
);


export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const { t } = useLanguage();
  const content = t(dairyIndustryContent);
  
  if (!content) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl lg:max-w-5xl w-[95vw] h-full max-h-[90vh] flex flex-col p-0 sm:p-6">
        <DialogHeader className="p-4 sm:p-0 shrink-0">
          <DialogTitle className="font-headline text-2xl md:text-3xl text-center">{content.main_title}</DialogTitle>
          <DialogDescription className="text-center">{content.description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 mt-4 sm:pr-4">
            <div className="p-4 sm:p-0 prose prose-sm max-w-none text-gray-700 leading-relaxed break-words">
                <p dangerouslySetInnerHTML={{ __html: content.intro1 }} />
                <p dangerouslySetInnerHTML={{ __html: content.intro2 }} />

                <SectionTitle title={content.overview.title} id="overview" />
                <SubSection title={content.overview.market_size.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.overview.market_size.text }} />
                </SubSection>
                <SubSection title={content.overview.contribution.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.overview.contribution.text }} />
                </SubSection>
                 <SubSection title={content.overview.production_trends.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text1 }} />
                    <p dangerouslySetInnerHTML={{ __html: content.overview.production_trends.text2 }} />
                </SubSection>
                <SubSection title={content.overview.drivers_challenges.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.drivers }} />
                    <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.challenges }} />
                    <p dangerouslySetInnerHTML={{ __html: content.overview.drivers_challenges.opportunities }} />
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{content.overview.drivers_challenges.table.header1}</TableHead>
                                    <TableHead>{content.overview.drivers_challenges.table.header2}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>{content.overview.drivers_challenges.table.row1_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row1_col2}</TableCell></TableRow>
                                <TableRow><TableCell>{content.overview.drivers_challenges.table.row2_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row2_col2}</TableCell></TableRow>
                                <TableRow><TableCell>{content.overview.drivers_challenges.table.row3_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row3_col2}</TableCell></TableRow>
                                <TableRow><TableCell>{content.overview.drivers_challenges.table.row4_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row4_col2}</TableCell></TableRow>
                                <TableRow><TableCell>{content.overview.drivers_challenges.table.row5_col1}</TableCell><TableCell>{content.overview.drivers_challenges.table.row5_col2}</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </SubSection>

                <SectionTitle title={content.cooperatives.title} id="cooperatives" />
                 <SubSection title={content.cooperatives.operation_flood.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.cooperatives.operation_flood.text }} />
                     <h5 className="font-bold mt-2">{content.cooperatives.operation_flood.objectives_title}</h5>
                     <ul className="list-disc pl-5">
                        {content.cooperatives.operation_flood.objectives.map((obj: string, i: number) => <li key={i}>{obj}</li>)}
                     </ul>
                      <h5 className="font-bold mt-2">{content.cooperatives.operation_flood.phases_title}</h5>
                     <ul className="list-disc pl-5">
                         {content.cooperatives.operation_flood.phases.map((phase: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: phase }} />)}
                     </ul>
                </SubSection>
                <SubSection title={content.cooperatives.anand_pattern.title}>
                    <p>{content.cooperatives.anand_pattern.intro}</p>
                    <ul className="list-disc pl-5">
                       {content.cooperatives.anand_pattern.tiers.map((tier: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: tier }} />)}
                    </ul>
                </SubSection>
                 <SubSection title={content.cooperatives.empowerment.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.cooperatives.empowerment.text }} />
                </SubSection>

                <SectionTitle title={content.trends.title} id="trends" />
                 <SubSection title={content.trends.modernization.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.trends.modernization.text }} />
                </SubSection>
                <SubSection title={content.trends.startups.title}>
                     <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text1 }} />
                     <p dangerouslySetInnerHTML={{ __html: content.trends.startups.text2 }} />
                </SubSection>
                
                 <SectionTitle title={content.exports.title} id="exports" />
                 <SubSection title={content.exports.status.title}>
                    <p dangerouslySetInnerHTML={{ __html: content.exports.status.text1 }} />
                    <p dangerouslySetInnerHTML={{ __html: content.exports.status.text2 }} />
                </SubSection>

                 <SectionTitle title={content.conclusion.title} id="conclusion" />
                 <p dangerouslySetInnerHTML={{ __html: content.conclusion.text }} />
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
