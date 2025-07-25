"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DairyIndustryModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">Dairy Industry Insights</DialogTitle>
          <DialogDescription className="text-center">An overview of the Indian Dairy Sector.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Bharat Ki Dairy Industry – Ek Overview</h4>
                    <p className="text-xs text-gray-500 mb-3">Last Updated: 21 July 2024</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>India duniya ka sabse bada milk producer hai, yearly <strong className="text-primary">230 million tonnes</strong> se bhi zyada doodh produce hota hai. Isme se most consumption ghar ke andar hi hota hai, export kam hai.</li>
                        <li>Major milk producing states: <strong className="text-primary">Uttar Pradesh, Rajasthan, Gujarat, Maharashtra, Punjab</strong>.</li>
                        <li>Doodh production mein buffalo ka major role hai, cow milk bhi badi quantity mein aata hai, goat milk ka minor share hai.</li>
                        <li>Indian dairy sector ka structure mainly rural, scattered families ya small farmers par based hai—isko organise karne ka kaam cooperatives ne kiya hai.</li>
                        <li>Recent data ke hisaab se market size <strong className="text-primary">INR 18,975 billion (2024)</strong>, aur 2033 tak <strong className="text-primary">INR 57,002 billion</strong> tak pahuchne ka estimation hai. Growth rate annual approx <strong className="text-primary">12.35% (2025–2033)</strong> hai.</li>
                        <li>Dairy sector GDP ka about <strong className="text-primary">5%</strong> contribute karta hai aur roughly <strong className="text-primary">8 crore farmers</strong> ko directly support karta hai.</li>
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Major Milestones: Operation Flood & White Revolution</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Operation Flood (1970–1996) ko “White Revolution” ke naam se bhi jana jata hai. Isne dairy ko ek rural development mission bana diya.</li>
                        <li>NDDB (National Dairy Development Board) ke through, teen phases mein implement hua. Village milk cooperative model se rural producers ko assured market aur transparent prices mile.</li>
                        <li>Modern management, R&D in animal health, aur technology adoption par focus kiya gaya.</li>
                        <li>Is revolution ke baad milk production 21 million tonnes (1970) se badhke 69 million tonnes (1996) ho gaya, aur ab ye 230 million tonnes ke paas hai annually.</li>
                    </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Dairy Cooperatives Ka Role</h4>
                    <p>Dairy cooperatives, jaise ki <strong className="text-primary">AMUL</strong>, Mother Dairy, aur regional corporates (Aavin, Banas Dairy, etc.), farming community ko strength deti hai. Yeh procurement, processing, marketing aur technology transfer mein madad karti hain. Inka model milk pricing, assured payment, logistics, aur veterinary services provide karta hai.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Naye Trends – Modernisation aur Startups</h4>
                    <p>E-commerce aur B2C dairy startups jaise ki Country Delight, Milk Mantra, etc. ab direct home delivery aur subscription models le kar aaye hain. Isse consumer convenience, quality assurance aur speciality dairy (organic, low fat, probiotic) products ka demand grow hua hai.</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-primary mb-2 font-headline">Dairy Export Status (2023-24)</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>India ne <strong className="text-primary">63,738 MT</strong> dairy products export kiye, value <strong className="text-primary">$272.65 million</strong> thi.</li>
                        <li>Major export items: ghee & butter (59% share), milk powder, cheese.</li>
                        <li>Main export destinations: UAE, Bangladesh, USA, Saudi Arabia, Bhutan, Singapore.</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h5 className="font-bold text-red-700 mb-2 font-headline">Challenges</h5>
                        <ul className="list-disc list-inside space-y-1 text-red-600">
                            <li>Fragmented small player base</li>
                            <li>Infrastructure gaps (cold storage)</li>
                            <li>Quality & adulteration issues</li>
                            <li>Fodder & water availability</li>
                            <li>Global competition</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h5 className="font-bold text-green-700 mb-2 font-headline">Opportunities</h5>
                        <ul className="list-disc list-inside space-y-1 text-green-600">
                            <li>Demand for value-added products</li>
                            <li>Technology adoption</li>
                            <li>Rural & women empowerment</li>
                            <li>Strong policy support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
