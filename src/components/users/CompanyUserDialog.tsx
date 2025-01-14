import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CompanyUser } from "@/types/users";
import CompanyUserForm from "./CompanyUserForm";

interface CompanyUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: CompanyUser;
  onSubmit: (data: Partial<CompanyUser>) => void;
  isLoading?: boolean;
}

const CompanyUserDialog = ({
  open,
  onOpenChange,
  user,
  onSubmit,
  isLoading,
}: CompanyUserDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full md:max-w-4xl lg:max-w-5xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-right mb-4">
            {user ? "تعديل بيانات الشركة" : "إضافة شركة جديدة"}
          </DialogTitle>
        </DialogHeader>
        <div className="p-1 md:p-4">
          <CompanyUserForm
            defaultValues={user}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyUserDialog;