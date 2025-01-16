import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Auction } from "@/types/auctions";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

interface AuctionsListProps {
  onEdit: (auction: Auction) => void;
}

const AuctionsList = ({ onEdit }: AuctionsListProps) => {
  const { toast } = useToast();
  
  // Sample auctions data
  const auctions: Auction[] = [
    {
      id: "1",
      auction_number: "AUC-2024-001",
      title: "سيارة مرسيدس 2023",
      description: "سيارة مرسيدس موديل 2023 بحالة ممتازة",
      organization_id: "org-1",
      starting_price: 200000,
      current_price: 250000,
      subscription_price: 1000,
      item_condition: ["حالة ممتازة", "صيانة دورية", "ضمان سنة"],
      rules: ["يجب تقديم ضمان بنكي", "الدفع خلال 24 ساعة"],
      notes: ["المعاينة في موقع الشركة"],
      status: "active",
      start_date: new Date("2024-03-01"),
      end_date: new Date("2024-03-15"),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "2",
      auction_number: "AUC-2024-002",
      title: "معدات مكتبية",
      description: "مجموعة معدات مكتبية حديثة",
      organization_id: "org-1",
      starting_price: 50000,
      current_price: 55000,
      subscription_price: 500,
      item_condition: ["جديدة", "ضمان المصنع"],
      rules: ["البيع بالمجموعة كاملة"],
      notes: [],
      status: "draft",
      start_date: new Date("2024-03-10"),
      end_date: new Date("2024-03-20"),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "3",
      auction_number: "AUC-2024-003",
      title: "أرض سكنية",
      description: "أرض سكنية في موقع مميز",
      organization_id: "org-1",
      starting_price: 1000000,
      current_price: 1200000,
      subscription_price: 5000,
      item_condition: ["مخططة", "خدمات متكاملة"],
      rules: ["دفعة أولى 20%"],
      notes: ["تشمل رخصة بناء"],
      status: "active",
      start_date: new Date("2024-03-05"),
      end_date: new Date("2024-04-05"),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  const handleDelete = async (auction: Auction) => {
    try {
      console.log("Deleting auction:", auction);
      toast({
        title: "تم حذف المزاد بنجاح",
        description: `المزاد: ${auction.title}`,
      });
    } catch (error) {
      console.error("Error deleting auction:", error);
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم نتمكن من حذف المزاد. الرجاء المحاولة مرة أخرى.",
      });
    }
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم المزاد</TableHead>
            <TableHead>العنوان</TableHead>
            <TableHead>السعر الحالي</TableHead>
            <TableHead>تاريخ البداية</TableHead>
            <TableHead>تاريخ النهاية</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead className="text-left">الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {auctions.map((auction) => (
            <TableRow key={auction.id}>
              <TableCell>{auction.auction_number}</TableCell>
              <TableCell>{auction.title}</TableCell>
              <TableCell>{auction.current_price.toLocaleString()} ريال</TableCell>
              <TableCell>
                {format(new Date(auction.start_date), "dd MMMM yyyy", { locale: ar })}
              </TableCell>
              <TableCell>
                {format(new Date(auction.end_date), "dd MMMM yyyy", { locale: ar })}
              </TableCell>
              <TableCell>{auction.status}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(auction)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(auction)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AuctionsList;