import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Candidate {
  id: string;
  name: string;
  matchScore: number;
  keyStrengths: string[];
  recommendation: string;
}

interface TopCandidatesProps {
  jobId: string;
}

const TopCandidates = ({ jobId }: TopCandidatesProps) => {
  // TODO: Implement actual API call to fetch top candidates
  const candidates: Candidate[] = [
    {
      id: "1",
      name: "محمد أحمد",
      matchScore: 92,
      keyStrengths: ["خبرة 5 سنوات", "مهارات قيادية", "شهادات معتمدة"],
      recommendation: "مرشح قوي مع خبرة مناسبة وتطابق عالي مع متطلبات الوظيفة",
    },
    {
      id: "2",
      name: "سارة خالد",
      matchScore: 88,
      keyStrengths: ["مهارات تقنية متقدمة", "عمل جماعي", "إنجازات سابقة"],
      recommendation: "مرشحة واعدة مع مهارات تقنية قوية",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <UserCheck className="h-6 w-6" />
          أفضل المرشحين
        </CardTitle>
        <CardDescription>
          توصيات ذكية للمرشحين الأكثر ملاءمة للوظيفة
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="border rounded-lg p-4 space-y-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">{candidate.name}</div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="secondary">
                        نسبة التطابق: {candidate.matchScore}%
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>درجة التطابق مع متطلبات الوظيفة</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-wrap gap-2">
                {candidate.keyStrengths.map((strength, index) => (
                  <Badge key={index} variant="outline">
                    {strength}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600">{candidate.recommendation}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCandidates;