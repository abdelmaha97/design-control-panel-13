import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobDialog from "@/components/jobs/JobDialog";
import JobsList from "@/components/jobs/JobsList";
import { Job } from "@/types/jobs";

const Jobs = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleAdd = () => {
    setSelectedJob(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (job: Job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة الوظائف</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة وظيفة
        </Button>
      </div>

      <JobsList onEdit={handleEdit} />
      
      <JobDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
        job={selectedJob}
      />
    </div>
  );
};

export default Jobs;