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
  const jobs: Job[] = []; // TODO: Implement API call to fetch jobs

  const handleDelete = async (job: Job) => {
    try {
      console.log("Deleting job:", job);
      // TODO: Implement API call to delete job
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