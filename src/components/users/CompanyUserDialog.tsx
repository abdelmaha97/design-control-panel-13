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
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {user ? "تعديل بيانات الشركة" : "إضافة شركة جديدة"}
          </DialogTitle>
        </DialogHeader>
        <CompanyUserForm
          defaultValues={user}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CompanyUserDialog;