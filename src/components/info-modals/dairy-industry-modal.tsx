"use client"

import { useEffect, useState, useTransition } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchLatestDairyIndustryData } from "@/app/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"

interface IndustryData {
  overview: string[];
  milestones: string[];
  cooperatives: string;
  trends: string;
  exports: string[];
  challenges: string[];
  opportunities: string[];
  lastUpdated: string;
}

export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const [data, setData] = useState<IndustryData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, startTransition] = useTransition();

  useEffect(() => {
    if (isOpen) {
      startTransition(async () => {
        try {
          setError(null);
          const result = await fetchLatestDairyIndustryData();
          setData(result);
        } catch (e) {
          setError("Failed to load the latest dairy industry data. Please try again later.");
          console.error(e);
        }
      });
    }
  }, [isOpen]);

  const renderContent = () => {
    if (isLoading) {
      return (
          <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-4 text-muted-foreground">Loading latest data...</p>
          </div>
      );
    }

    if (error) {
        return <Alert variant="destructive"><AlertTitle>Error</AlertTitle><AlertDescription>{error}</AlertDescription></Alert>
    }

    if (data) {
        return (
             <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Bharat Ki Dairy Industry – Ek Overview</h4>
                    <p className="text-xs text-gray-500 mb-3">Last Updated: {data.lastUpdated}</p>
                    <ul className="list-disc list-inside space-y-2">
                        {data.overview.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Major Milestones: Operation Flood & White Revolution</h4>
                    <ul className="list-disc list-inside space-y-2">
                         {data.milestones.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Dairy Cooperatives Ka Role</h4>
                    <p dangerouslySetInnerHTML={{ __html: data.cooperatives }} />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Naye Trends – Modernisation aur Startups</h4>
                    <p dangerouslySetInnerHTML={{ __html: data.trends }} />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Dairy Export Status</h4>
                    <ul className="list-disc list-inside space-y-2">
                        {data.exports.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h5 className="font-bold text-red-700 mb-2 font-headline">Challenges</h5>
                        <ul className="list-disc list-inside space-y-1 text-red-600">
                            {data.challenges.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-bold text-green-700 mb-2 font-headline">Opportunities</h5>
                        <ul className="list-disc list-inside space-y-1 text-green-600">
                            {data.opportunities.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Dairy Industry Insights</DialogTitle>
          <DialogDescription className="text-center">An overview of the Indian Dairy Sector.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6 mt-4">
            {renderContent()}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
