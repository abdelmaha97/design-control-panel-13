import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { Job } from "@/types/jobs";
import { useToast } from "@/components/ui/use-toast";

interface JobsListProps {
  onEdit: (job: Job) => void;
}

const JobsList = ({ onEdit }: JobsListProps) => {
  const { toast } = useToast();
  
  // Sample jobs data
  const jobs: Job[] = [
    {
      id: "1",
      job_number: "JOB-2024-001",
      title: "مطور واجهات أمامية",
      description: "نحن نبحث عن مطور واجهات أمامية ذو خبرة للعمل على مشاريعنا",
      organization_id: "org-1",
      type: "full_time",
      location: "الرياض",
      salary_range: "15000-20000 ريال",
      requirements: "خبرة 3 سنوات في React.js",
      benefits: "تأمين طبي، تذاكر سفر سنوية",
      status: "published",
      deadline: new Date("2024-12-31"),
    },
    {
      id: "2",
      job_number: "JOB-2024-002",
      title: "مهندس برمجيات",
      description: "مطلوب مهندس برمجيات للعمل على تطوير تطبيقات الويب",
      organization_id: "org-1",
      type: "full_time",
      location: "جدة",
      salary_range: "18000-25000 ريال",
      requirements: "بكالوريوس في علوم الحاسب، خبرة 5 سنوات",
      benefits: "تأمين طبي، بدل سكن",
      status: "published",
      deadline: new Date("2024-11-30"),
    },
    {
      id: "3",
      job_number: "JOB-2024-003",
      title: "مصمم واجهات المستخدم",
      description: "نبحث عن مصمم واجهات مستخدم مبدع للانضمام إلى فريقنا",
      organization_id: "org-1",
      type: "part_time",
      location: "الدمام",
      salary_range: "10000-15000 ريال",
      requirements: "خبرة في Figma و Adobe XD",
      benefits: "ساعات عمل مرنة",
      status: "draft",
      deadline: new Date("2024-10-31"),
    },
  ];

  const handleDelete = async (job: Job) => {
    try {
      console.log("Deleting job:", job);
      toast({
        title: "تم حذف الوظيفة بنجاح",
        description: `الوظيفة: ${job.title}`,
      });
    } catch (error) {
      console.error("Error deleting job:", error);
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم نتمكن من حذف الوظيفة. الرجاء المحاولة مرة أخرى.",
      });
    }
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>رقم الوظيفة</TableHead>
            <TableHead>المسمى الوظيفي</TableHead>
            <TableHead>النوع</TableHead>
            <TableHead>الموقع</TableHead>
            <TableHead>الحالة</TableHead>
            <TableHead>تاريخ الانتهاء</TableHead>
            <TableHead className="text-left">الإجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.job_number}</TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.type}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>
                {job.deadline instanceof Date
                  ? job.deadline.toLocaleDateString('ar-SA')
                  : new Date(job.deadline).toLocaleDateString('ar-SA')}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(job)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(job)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default JobsList;