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
import { ScrollArea } from "@/components/ui/scroll-area";
import type { News, NewsStatus, NewsType } from "@/types/news";
import NewsDialog from "@/components/news/NewsDialog";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

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

  const renderMobileView = () => (
    <div className="space-y-4">
      {news.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg">{item.title}</h3>
            <Badge variant="outline">{getTypeLabel(item.type)}</Badge>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>الحالة: <Badge className={getStatusColor(item.status)}>
              {item.status === "published" ? "منشور" : item.status === "draft" ? "مسودة" : "مؤرشف"}
            </Badge></p>
            <p>تاريخ النشر: {item.published_at
              ? format(new Date(item.published_at), "dd MMMM yyyy", { locale: ar })
              : "-"}</p>
            <p>آخر تحديث: {format(new Date(item.updated_at), "dd MMMM yyyy", { locale: ar })}</p>
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => handleEdit(item)} className="flex-1">
              تعديل
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => handleDelete(item.id)}
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
      </ScrollArea>
    </div>
  );

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">إدارة الأخبار والفعاليات</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة جديد
        </Button>
      </div>

      {isMobile ? renderMobileView() : renderDesktopView()}

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
