import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Auction } from "@/types/auctions";

interface AuctionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  auction?: Auction | null;
}

const AuctionDialog = ({ open, onOpenChange, auction }: AuctionDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<Auction>>(
    auction || {
      auction_number: "",
      title: "",
      description: "",
      starting_price: 0,
      current_price: 0,
      subscription_price: 0,
      item_condition: [],
      rules: [],
      notes: [],
      status: "draft",
      start_date: new Date(),
      end_date: new Date(),
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitting auction:", formData);
      toast({
        title: auction ? "تم تحديث المزاد بنجاح" : "تم إضافة المزاد بنجاح",
        description: `المزاد: ${formData.title}`,
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting auction:", error);
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم نتمكن من حفظ المزاد. الرجاء المحاولة مرة أخرى.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {auction ? "تعديل المزاد" : "إضافة مزاد جديد"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="auction_number">رقم المزاد</label>
            <Input
              id="auction_number"
              value={formData.auction_number}
              onChange={(e) =>
                setFormData({ ...formData, auction_number: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="title">عنوان المزاد</label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description">الوصف</label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="starting_price">السعر الابتدائي</label>
            <Input
              id="starting_price"
              type="number"
              value={formData.starting_price}
              onChange={(e) =>
                setFormData({ ...formData, starting_price: Number(e.target.value) })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subscription_price">رسوم الاشتراك</label>
            <Input
              id="subscription_price"
              type="number"
              value={formData.subscription_price}
              onChange={(e) =>
                setFormData({ ...formData, subscription_price: Number(e.target.value) })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="start_date">تاريخ البداية</label>
            <Input
              id="start_date"
              type="datetime-local"
              value={formData.start_date ? new Date(formData.start_date).toISOString().slice(0, 16) : ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  start_date: new Date(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="end_date">تاريخ النهاية</label>
            <Input
              id="end_date"
              type="datetime-local"
              value={formData.end_date ? new Date(formData.end_date).toISOString().slice(0, 16) : ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  end_date: new Date(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="status">الحالة</label>
            <Select
              value={formData.status}
              onValueChange={(value) =>
                setFormData({ ...formData, status: value as Auction["status"] })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">مسودة</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="closed">مغلق</SelectItem>
                <SelectItem value="cancelled">ملغي</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              إلغاء
            </Button>
            <Button type="submit">{auction ? "تحديث" : "إضافة"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuctionDialog;