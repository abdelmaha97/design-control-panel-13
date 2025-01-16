import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuctionDialog from "@/components/auctions/AuctionDialog";
import AuctionsList from "@/components/auctions/AuctionsList";
import AuctionBidsAnalysis from "@/components/auctions/AuctionBidsAnalysis";
import TopBidders from "@/components/auctions/TopBidders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Auction } from "@/types/auctions";

const Auctions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);

  const handleAdd = () => {
    setSelectedAuction(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (auction: Auction) => {
    setSelectedAuction(auction);
    setIsDialogOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة المزادات</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة مزاد
        </Button>
      </div>

      <Tabs defaultValue="auctions" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="auctions">المزادات</TabsTrigger>
          <TabsTrigger value="analysis">تحليل العروض</TabsTrigger>
          <TabsTrigger value="winners">الفائزون</TabsTrigger>
        </TabsList>

        <TabsContent value="auctions">
          <AuctionsList onEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="analysis">
          {selectedAuction ? (
            <AuctionBidsAnalysis auctionId={selectedAuction.id} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              الرجاء اختيار مزاد لعرض تحليل العروض
            </div>
          )}
        </TabsContent>

        <TabsContent value="winners">
          {selectedAuction ? (
            <TopBidders auctionId={selectedAuction.id} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              الرجاء اختيار مزاد لعرض الفائزين
            </div>
          )}
        </TabsContent>
      </Tabs>

      <AuctionDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        auction={selectedAuction}
      />
    </div>
  );
};

export default Auctions;