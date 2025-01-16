import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Job } from "@/types/jobs";
import JobForm from "./JobForm";

interface JobDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job?: Job | null;
}

const JobDialog = ({ open, onOpenChange, job }: JobDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-right text-xl md:text-2xl">
            {job ? "تعديل وظيفة" : "إضافة وظيفة جديدة"}
          </DialogTitle>
        </DialogHeader>
        <JobForm job={job} onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default JobDialog;