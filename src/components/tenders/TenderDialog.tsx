import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Tender } from "@/types/tenders";

interface TenderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tender?: Tender | null;
}

const TenderDialog = ({ open, onOpenChange, tender }: TenderDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<Tender>>(
    tender || {
      tender_number: "",
      title: "",
      description: "",
      category: "it",
      budget: 0,
      document: "",
      notes: [],
      submission_deadline: new Date(),
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Submitting tender:", formData);
      toast({
        title: tender ? "تم تحديث المناقصة بنجاح" : "تم إضافة المناقصة بنجاح",
        description: `المناقصة: ${formData.title}`,
      });
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting tender:", error);
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم نتمكن من حفظ المناقصة. الرجاء المحاولة مرة أخرى.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {tender ? "تعديل المناقصة" : "إضافة مناقصة جديدة"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="tender_number">رقم المناقصة</label>
            <Input
              id="tender_number"
              value={formData.tender_number}
              onChange={(e) =>
                setFormData({ ...formData, tender_number: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="title">عنوان المناقصة</label>
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
            <label htmlFor="category">التصنيف</label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value as Tender["category"] })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="construction">إنشاءات</SelectItem>
                <SelectItem value="it">تقنية معلومات</SelectItem>
                <SelectItem value="supplies">توريدات</SelectItem>
                <SelectItem value="services">خدمات</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="budget">الميزانية</label>
            <Input
              id="budget"
              type="number"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: Number(e.target.value) })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="submission_deadline">تاريخ الإغلاق</label>
            <Input
              id="submission_deadline"
              type="date"
              value={
                formData.submission_deadline
                  ? new Date(formData.submission_deadline)
                      .toISOString()
                      .split("T")[0]
                  : ""
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  submission_deadline: new Date(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              إلغاء
            </Button>
            <Button type="submit">{tender ? "تحديث" : "إضافة"}</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TenderDialog;