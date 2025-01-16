import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tender } from "@/types/tenders";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useIsMobile } from "@/hooks/use-mobile";

interface TendersListProps {
  onEdit: (tender: Tender) => void;
}

const TendersList = ({ onEdit }: TendersListProps) => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Sample tenders data
  const tenders: Tender[] = [
    {
      id: "1",
      tender_number: "T-2024-001",
      title: "مشروع تطوير البنية التحتية للشبكة",
      description: "تطوير وتحديث البنية التحتية لشبكة الاتصالات",
      organization_id: "org-1",
      category: "it",
      budget: 1000000.00,
      document: "https://example.com/tender1.pdf",
      notes: ["يجب تقديم خطة تنفيذ مفصلة", "يشترط الخبرة في مشاريع مماثلة"],
      status: "published",
      submission_deadline: new Date("2024-06-30"),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "2",
      tender_number: "T-2024-002",
      title: "توريد أجهزة حاسب آلي",
      description: "توريد وتركيب أجهزة حاسب آلي ومعدات تقنية",
      organization_id: "org-1",
      category: "supplies",
      budget: 500000.00,
      document: "https://example.com/tender2.pdf",
      notes: ["يشترط وكالة معتمدة", "ضمان 3 سنوات"],
      status: "published",
      submission_deadline: new Date("2024-05-15"),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "3",
      tender_number: "T-2024-003",
      title: "خدمات صيانة المباني",
      description: "تقديم خدمات صيانة شاملة للمباني الإدارية",
      organization_id: "org-1",
      category: "services",
      budget: 750000.00,
      document: "https://example.com/tender3.pdf",
      notes: ["خبرة 5 سنوات في الصيانة", "فريق عمل متكامل"],
      status: "draft",
      submission_deadline: new Date("2024-07-31"),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  const handleDelete = async (tender: Tender) => {
    try {
      console.log("Deleting tender:", tender);
      toast({
        title: "تم حذف المناقصة بنجاح",
        description: `المناقصة: ${tender.title}`,
      });
    } catch (error) {
      console.error("Error deleting tender:", error);
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم نتمكن من حذف المناقصة. الرجاء المحاولة مرة أخرى.",
      });
    }
  };

  const getCategoryLabel = (category: Tender["category"]) => {
    switch (category) {
      case "construction":
        return "إنشاءات";
      case "it":
        return "تقنية معلومات";
      case "supplies":
        return "توريدات";
      case "services":
        return "خدمات";
    }
  };

  const getStatusColor = (status: Tender["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-500";
      case "draft":
        return "bg-yellow-500";
      case "closed":
        return "bg-red-500";
      case "archived":
        return "bg-gray-500";
    }
  };

  const renderMobileView = () => (
    <div className="space-y-4">
      {tenders.map((tender) => (
        <div key={tender.id} className="bg-white p-4 rounded-lg shadow space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">{tender.title}</h3>
              <p className="text-sm text-gray-500">#{tender.tender_number}</p>
            </div>
            <Badge className={getStatusColor(tender.status)}>
              {tender.status === "published"
                ? "منشور"
                : tender.status === "draft"
                ? "مسودة"
                : tender.status === "closed"
                ? "مغلق"
                : "مؤرشف"}
            </Badge>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>التصنيف: {getCategoryLabel(tender.category)}</p>
            <p>الميزانية: {tender.budget.toLocaleString()} ريال</p>
            <p>
              تاريخ الإغلاق:{" "}
              {format(new Date(tender.submission_deadline), "dd MMMM yyyy", {
                locale: ar,
              })}
            </p>
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit(tender)}
              className="flex-1"
            >
              تعديل
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(tender)}
              className="flex-1"
            >
              حذف
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDesktopView = () => (
    <div className="border rounded-lg">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم المناقصة</TableHead>
              <TableHead>العنوان</TableHead>
              <TableHead>التصنيف</TableHead>
              <TableHead>الميزانية</TableHead>
              <TableHead>تاريخ الإغلاق</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenders.map((tender) => (
              <TableRow key={tender.id}>
                <TableCell>{tender.tender_number}</TableCell>
                <TableCell className="font-medium">{tender.title}</TableCell>
                <TableCell>{getCategoryLabel(tender.category)}</TableCell>
                <TableCell>{tender.budget.toLocaleString()} ريال</TableCell>
                <TableCell>
                  {format(new Date(tender.submission_deadline), "dd MMMM yyyy", {
                    locale: ar,
                  })}
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(tender.status)}>
                    {tender.status === "published"
                      ? "منشور"
                      : tender.status === "draft"
                      ? "مسودة"
                      : tender.status === "closed"
                      ? "مغلق"
                      : "مؤرشف"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(tender)}
                    >
                      تعديل
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(tender)}
                    >
                      حذف
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default TendersList;