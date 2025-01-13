import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { News, NewsStatus, NewsType } from "@/types/news";
import NewsDialog from "@/components/news/NewsDialog";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

const initialNews: News[] = [
  {
    id: "1",
    type: "news",
    title: "إطلاق منصة التوظيف الجديدة",
    content: "تم إطلاق منصة التوظيف الجديدة لتسهيل عملية التوظيف وربط الباحثين عن عمل بالشركات",
    image_url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    status: "published",
    created_at: new Date("2024-01-15"),
    updated_at: new Date("2024-01-15"),
    published_at: new Date("2024-01-15"),
  },
  {
    id: "2",
    type: "event",
    title: "معرض الوظائف السنوي 2024",
    content: "سيقام معرض الوظائف السنوي في مركز المعارض الدولي بمشاركة أكثر من 50 شركة",
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    status: "draft",
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-01"),
  },
  {
    id: "3",
    type: "news",
    title: "تحديث شروط التقديم على المناقصات",
    content: "تم تحديث شروط وآلية التقديم على المناقصات الحكومية لتحسين الشفافية والكفاءة",
    image_url: "https://images.unsplash.com/photo-1664575602554-2087b04935a5",
    status: "published",
    created_at: new Date("2024-02-10"),
    updated_at: new Date("2024-02-10"),
    published_at: new Date("2024-02-10"),
  },
];

const NewsPage = () => {
  const [news, setNews] = useState<News[]>(initialNews);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const handleAdd = () => {
    setSelectedNews(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (item: News) => {
    setSelectedNews(item);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setNews(news.filter((item) => item.id !== id));
  };

  const handleSave = (newsItem: News) => {
    if (selectedNews) {
      setNews(news.map((item) => (item.id === newsItem.id ? newsItem : item)));
    } else {
      setNews([...news, { ...newsItem, id: Math.random().toString() }]);
    }
    setIsDialogOpen(false);
  };

  const getStatusColor = (status: NewsStatus) => {
    switch (status) {
      case "published":
        return "bg-green-500";
      case "draft":
        return "bg-yellow-500";
      case "archived":
        return "bg-gray-500";
      default:
        return "bg-blue-500";
    }
  };

  const getTypeLabel = (type: NewsType) => {
    return type === "news" ? "خبر" : "فعالية";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة الأخبار والفعاليات</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة جديد
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>العنوان</TableHead>
              <TableHead>النوع</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>تاريخ النشر</TableHead>
              <TableHead>تاريخ التحديث</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{getTypeLabel(item.type)}</Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status === "published" ? "منشور" : item.status === "draft" ? "مسودة" : "مؤرشف"}
                  </Badge>
                </TableCell>
                <TableCell>
                  {item.published_at
                    ? format(new Date(item.published_at), "dd MMMM yyyy", { locale: ar })
                    : "-"}
                </TableCell>
                <TableCell>
                  {format(new Date(item.updated_at), "dd MMMM yyyy", { locale: ar })}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(item)}>
                      تعديل
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      حذف
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <NewsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        news={selectedNews}
        onSave={handleSave}
      />
    </div>
  );
};

export default NewsPage;
