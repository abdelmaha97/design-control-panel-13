import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import { AuctionBid } from "@/types/auctions";

interface TopBiddersProps {
  auctionId: string;
}

const TopBidders = ({ auctionId }: TopBiddersProps) => {
  // Sample bids data
  const bids: AuctionBid[] = [
    {
      id: "1",
      auction_id: auctionId,
      user_id: "user-1",
      bid_amount: 250000,
      bid_amount_url: "url-to-bid-document",
      bank_guarantee_url: "url-to-guarantee",
      bank_guarantee_number: "BG001",
      bank_guarantee_date: new Date(),
      status: "accepted",
      bid_time: new Date(),
    },
    {
      id: "2",
      auction_id: auctionId,
      user_id: "user-2",
      bid_amount: 248000,
      bid_amount_url: "url-to-bid-document",
      bank_guarantee_url: "url-to-guarantee",
      bank_guarantee_number: "BG002",
      bank_guarantee_date: new Date(),
      status: "active",
      bid_time: new Date(),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Trophy className="h-6 w-6" />
          الفائزون في المزاد
        </CardTitle>
        <CardDescription>
          قائمة بأعلى العروض المقدمة المطابقة للشروط
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bids.map((bid, index) => (
            <div
              key={bid.id}
              className="border rounded-lg p-4 space-y-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">
                  العرض رقم #{index + 1}
                </div>
                <Badge variant={bid.status === "accepted" ? "default" : "secondary"}>
                  {bid.status === "accepted" ? "فائز" : "قيد المراجعة"}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">قيمة العرض:</span>{" "}
                  {bid.bid_amount.toLocaleString()} ريال
                </div>
                <div>
                  <span className="text-gray-500">رقم الضمان:</span>{" "}
                  {bid.bank_guarantee_number}
                </div>
              </div>
              {bid.status === "accepted" && (
                <p className="text-sm text-green-600">
                  تم قبول العرض كأعلى عرض مطابق للشروط
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopBidders;