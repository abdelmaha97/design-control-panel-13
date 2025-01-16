export type AuctionStatus = "draft" | "active" | "closed" | "cancelled";
export type BidStatus = "active" | "withdrawn" | "accepted" | "rejected";

export interface Auction {
  id: string;
  auction_number: string;
  title: string;
  description: string;
  organization_id: string;
  starting_price: number;
  current_price: number;
  subscription_price: number;
  item_condition: string[];
  rules: string[];
  notes: string[];
  status: AuctionStatus;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface AuctionBid {
  id: string;
  auction_id: string;
  user_id: string;
  bid_amount: number;
  bid_amount_url: string;
  bank_guarantee_url: string;
  bank_guarantee_number: string | null;
  bank_guarantee_date: Date | null;
  status: BidStatus;
  bid_time: Date;
}