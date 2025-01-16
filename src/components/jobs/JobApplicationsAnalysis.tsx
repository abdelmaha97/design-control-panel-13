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

interface JobApplication {
  id: string;
  user_id: string;
  cover_letter: string;
  resume_url: string;
  status: string;
  application_date: string;
  match_score?: number;
  skills_match?: {
    skill: string;
    score: number;
  }[];
  user: {
    name: string;
    email: string;
  };
}

interface JobApplicationsAnalysisProps {
  jobId: string;
  requirements: string;
}

const JobApplicationsAnalysis = ({ jobId, requirements }: JobApplicationsAnalysisProps) => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndAnalyzeApplications = async () => {
      try {
        console.log("Fetching applications for job:", jobId);
        // TODO: Implement actual API call to fetch applications
        const mockApplications: JobApplication[] = [
          {
            id: "1",
            user_id: "user1",
            cover_letter: "I am excited to apply...",
            resume_url: "https://example.com/resume1.pdf",
            status: "pending",
            application_date: new Date().toISOString(),
            match_score: 85,
            skills_match: [
              { skill: "React", score: 90 },
              { skill: "TypeScript", score: 80 },
              { skill: "Node.js", score: 85 },
            ],
            user: {
              name: "أحمد محمد",
              email: "ahmed@example.com",
            },
          },
          // Add more mock data as needed
        ];

        setApplications(mockApplications);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setIsLoading(false);
      }
    };

    fetchAndAnalyzeApplications();
  }, [jobId]);

  const getMatchScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Brain className="h-6 w-6" />
            التحليل الذكي للتقديمات
          </CardTitle>
          <CardDescription>
            تحليل المتقدمين ومطابقتهم مع متطلبات الوظيفة
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-4">جاري التحليل...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>المتقدم</TableHead>
                  <TableHead>نسبة التطابق</TableHead>
                  <TableHead>المهارات المتطابقة</TableHead>
                  <TableHead>الحالة</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{application.user.name}</div>
                        <div className="text-sm text-gray-500">
                          {application.user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            {application.match_score}%
                          </span>
                          <Progress
                            value={application.match_score}
                            className={`h-2 w-20 ${getMatchScoreColor(
                              application.match_score || 0
                            )}`}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {application.skills_match?.map((skill) => (
                          <Badge
                            key={skill.skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill.skill} ({skill.score}%)
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          application.status === "accepted"
                            ? "success"
                            : application.status === "rejected"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {application.status === "pending"
                          ? "قيد المراجعة"
                          : application.status === "accepted"
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
    </div>
  );
};

export default JobApplicationsAnalysis;