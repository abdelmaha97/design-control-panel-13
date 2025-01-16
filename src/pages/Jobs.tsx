import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobDialog from "@/components/jobs/JobDialog";
import JobsList from "@/components/jobs/JobsList";
import JobApplicationsAnalysis from "@/components/jobs/JobApplicationsAnalysis";
import TopCandidates from "@/components/jobs/TopCandidates";
import { Job } from "@/types/jobs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      <Tabs defaultValue="jobs" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="jobs">الوظائف</TabsTrigger>
          <TabsTrigger value="analysis">تحليل التقديمات</TabsTrigger>
          <TabsTrigger value="candidates">المرشحون</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs">
          <JobsList onEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="analysis">
          {selectedJob ? (
            <JobApplicationsAnalysis
              jobId={selectedJob.id}
              requirements={selectedJob.requirements || ""}
            />
          ) : (
            <div className="text-center py-8 text-gray-500">
              الرجاء اختيار وظيفة لعرض تحليل التقديمات
            </div>
          )}
        </TabsContent>

        <TabsContent value="candidates">
          {selectedJob ? (
            <TopCandidates jobId={selectedJob.id} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              الرجاء اختيار وظيفة لعرض المرشحين
            </div>
          )}
        </TabsContent>
      </Tabs>

      <JobDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        job={selectedJob}
      />
    </div>
  );
};

export default Jobs;