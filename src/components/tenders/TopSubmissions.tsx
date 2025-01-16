import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TopSubmission {
  id: string;
  company: string;
  matchScore: number;
  strengths: string[];
  recommendation: string;
}

interface TopSubmissionsProps {
  tenderId: string;
}

const TopSubmissions = ({ tenderId }: TopSubmissionsProps) => {
  // Sample top submissions data
  const submissions: TopSubmission[] = [
    {
      id: "1",
      company: "شركة التقنية المتقدمة",
      matchScore: 92,
      strengths: ["خبرة تقنية عالية", "سجل مشاريع ناجح", "فريق عمل مؤهل"],
      recommendation: "مرشح قوي مع خبرة تقنية متميزة وسجل حافل بالمشاريع الناجحة",
    },
    {
      id: "2",
      company: "مؤسسة الحلول الشاملة",
      matchScore: 88,
      strengths: ["عرض مالي تنافسي", "خطة تنفيذ واضحة", "موارد كافية"],
      recommendation: "عرض متوازن مع أسعار تنافسية وخطة تنفيذ مفصلة",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Award className="h-6 w-6" />
          أفضل العطاءات
        </CardTitle>
        <CardDescription>
          توصيات ذكية للعطاءات الأكثر ملاءمة للمناقصة
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="border rounded-lg p-4 space-y-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">{submission.company}</div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="secondary">
                        نسبة التطابق: {submission.matchScore}%
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>درجة التطابق مع متطلبات المناقصة</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-wrap gap-2">
                {submission.strengths.map((strength, index) => (
                  <Badge key={index} variant="outline">
                    {strength}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600">{submission.recommendation}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSubmissions;