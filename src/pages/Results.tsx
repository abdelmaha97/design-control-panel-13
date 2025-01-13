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
import type { Result } from "@/types/results";
import ResultDialog from "@/components/results/ResultDialog";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

const initialResults: Result[] = [
  {
    id: "1",
    type: "tender",
    title: "مشروع تطوير البنية التحتية",
    description: "مشروع لتطوير شبكة الطرق والجسور في المنطقة الشمالية",
    entity: "وزارة النقل",
    location: "المنطقة الشمالية",
    date: new Date("2024-03-01"),
    selection_method: "المناقصة العامة",
    criteria: "الخبرة السابقة، التكلفة، المدة الزمنية",
    amount: 5000000.00,
    winner: "شركة الإعمار للمقاولات",
    image_path: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    status: "published",
    created_at: new Date("2024-01-15"),
    updated_at: new Date("2024-01-15"),
  },
  {
    id: "2",
    type: "job",
    title: "مهندس برمجيات",
    description: "وظيفة مهندس برمجيات خبرة 5 سنوات في تطوير تطبيقات الويب",
    entity: "وزارة التقنية",
    location: "الرياض",
    date: new Date("2024-03-15"),
    selection_method: "المقابلات الشخصية",
    criteria: "الخبرة، المهارات التقنية، اللغة الإنجليزية",
    selected_candidates: {
      accepted: ["أحمد محمد", "سارة خالد"],
      rejected: ["محمد علي"]
    },
    image_path: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    status: "draft",
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-01"),
  },
  {
    id: "3",
    type: "auction",
    title: "مزاد معدات مكتبية",
    description: "مزاد علني لبيع أثاث ومعدات مكتبية مستعملة",
    entity: "وزارة المالية",
    location: "جدة",
    date: new Date("2024-03-30"),
    selection_method: "المزاد العلني",
    criteria: "أعلى سعر",
    amount: 150000.00,
    winner: "مؤسسة الأمل للتجارة",
    notes: "تم البيع بنجاح وتسليم المعدات",
    image_path: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    status: "published",
    created_at: new Date("2024-02-10"),
    updated_at: new Date("2024-02-10"),
  },
];

const ResultsPage = () => {
  const [results, setResults] = useState<Result[]>(initialResults);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);

  const handleAdd = () => {
    setSelectedResult(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (result: Result) => {
    setSelectedResult(result);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setResults(results.filter((result) => result.id !== id));
  };

  const handleSave = (result: Result) => {
    if (selectedResult) {
      setResults(results.map((item) => (item.id === result.id ? result : item)));
    } else {
      setResults([...results, result]);
    }
    setIsDialogOpen(false);
  };

  const getTypeLabel = (type: Result["type"]) => {
    switch (type) {
      case "tender":
        return "مناقصة";
      case "auction":
        return "مزاد";
      case "job":
        return "وظيفة";
    }
  };

  const getStatusColor = (status: Result["status"]) => {
    switch (status) {
      case "published":
        return "bg-green-500";
      case "draft":
        return "bg-yellow-500";
      case "archived":
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إدارة النتائج</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة نتيجة
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>العنوان</TableHead>
              <TableHead>النوع</TableHead>
              <TableHead>الجهة</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="font-medium">{result.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{getTypeLabel(result.type)}</Badge>
                </TableCell>
                <TableCell>{result.entity}</TableCell>
                <TableCell>
                  {format(new Date(result.date), "dd MMMM yyyy", { locale: ar })}
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(result.status)}>
                    {result.status === "published"
                      ? "منشور"
                      : result.status === "draft"
                      ? "مسودة"
                      : "مؤرشف"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(result)}
                    >
                      تعديل
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(result.id)}
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

      <ResultDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        result={selectedResult}
        onSave={handleSave}
      />
    </div>
  );
};

export default ResultsPage;