import { Project } from "@/types/projects";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectForm from "./ProjectForm";
import { useForm } from "react-hook-form";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  onSave: (project: Project) => void;
}

const ProjectDialog = ({
  open,
  onOpenChange,
  project,
  onSave,
}: ProjectDialogProps) => {
  const form = useForm<Project>({
    defaultValues: project || {
      project_number: "",
      title: "",
      image_paths: [],
      description: "",
      owner_id: "",
      contractor_id: "",
      location: "",
      budget: 0,
      status: "planning",
      type: "",
      start_date: new Date(),
      end_date: new Date(),
      progress: 0,
      team: [],
      risks: [],
      financial_details: [],
      expected_outcomes: [],
      reports: [],
      tools: [],
      notes: [],
    },
  });

  const handleSubmit = (data: Project) => {
    onSave(data);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {project ? "تعديل المشروع" : "إضافة مشروع جديد"}
          </DialogTitle>
        </DialogHeader>
        <ProjectForm
          form={form}
          onSubmit={handleSubmit}
          isEditing={!!project}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;