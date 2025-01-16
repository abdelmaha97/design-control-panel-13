import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Brain } from "lucide-react";
import { TenderSubmission } from "@/types/tenders";

interface TenderSubmissionsAnalysisProps {
  tenderId: string;
}

const TenderSubmissionsAnalysis = ({ tenderId }: TenderSubmissionsAnalysisProps) => {
  const [submissions, setSubmissions] = useState<TenderSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndAnalyzeSubmissions = async () => {
      try {
        console.log("Fetching submissions for tender:", tenderId);
        // Sample submissions data
        const mockSubmissions: TenderSubmission[] = [
          {
            id: "1",
            tender_id: tenderId,
            user_id: "user1",
            technical_file_url: ["https://example.com/tech1.pdf"],
            financial_file_url: "https://example.com/fin1.pdf",
            bank_guarantee_url: "https://example.com/bg1.pdf",
            bank_guarantee_number: "BG001",
            bank_guarantee_date: new Date("2024-03-01"),
            status: "pending",
            submission_date: new Date(),
            technical_score: 85,
            financial_score: 90,
            notes: "عرض قوي مع خبرة تقنية عالية",
            user: {
              name: "شركة التقنية المتقدمة",
              company: "شركة التقنية المتقدمة",
            },
          },
          {
            id: "2",
            tender_id: tenderId,
            user_id: "user2",
            technical_file_url: ["https://example.com/tech2.pdf"],
            financial_file_url: "https://example.com/fin2.pdf",
            bank_guarantee_url: "https://example.com/bg2.pdf",
            bank_guarantee_number: "BG002",
            bank_guarantee_date: new Date("2024-03-02"),
            status: "pending",
            submission_date: new Date(),
            technical_score: 75,
            financial_score: 85,
            notes: "عرض مالي تنافسي",
            user: {
              name: "مؤسسة الحلول الشاملة",
              company: "مؤسسة الحلول الشاملة",
            },
          },
          {
            id: "3",
            tender_id: tenderId,
            user_id: "user3",
            technical_file_url: ["https://example.com/tech3.pdf"],
            financial_file_url: "https://example.com/fin3.pdf",
            bank_guarantee_url: "https://example.com/bg3.pdf",
            bank_guarantee_number: "BG003",
            bank_guarantee_date: new Date("2024-03-03"),
            status: "pending",
            submission_date: new Date(),
            technical_score: 80,
            financial_score: 70,
            notes: "خبرة سابقة في مشاريع مماثلة",
            user: {
              name: "شركة الإنجاز للمقاولات",
              company: "شركة الإنجاز للمقاولات",
            },
          },
        ];

        setSubmissions(mockSubmissions);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching submissions:", error);
        setIsLoading(false);
      }
    };

    fetchAndAnalyzeSubmissions();
  }, [tenderId]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Brain className="h-6 w-6" />
          التحليل الذكي للعطاءات
        </CardTitle>
        <CardDescription>
          تحليل العطاءات المقدمة وتقييمها فنياً ومالياً
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center py-4">جاري التحليل...</div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>مقدم العطاء</TableHead>
                <TableHead>التقييم الفني</TableHead>
                <TableHead>التقييم المالي</TableHead>
                <TableHead>الملاحظات</TableHead>
                <TableHead>الحالة</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{submission.user?.name}</div>
                      <div className="text-sm text-gray-500">
                        {submission.user?.company}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {submission.technical_score}%
                        </span>
                        <Progress
                          value={submission.technical_score}
                          className={`h-2 w-20 ${getScoreColor(
                            submission.technical_score || 0
                          )}`}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {submission.financial_score}%
                        </span>
                        <Progress
                          value={submission.financial_score}
                          className={`h-2 w-20 ${getScoreColor(
                            submission.financial_score || 0
                          )}`}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{submission.notes}</div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        submission.status === "accepted"
                          ? "default"
                          : submission.status === "rejected"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {submission.status === "pending"
                        ? "قيد المراجعة"
                        : submission.status === "accepted"
                        ? "مقبول"
                        : "مرفوض"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default TenderSubmissionsAnalysis;