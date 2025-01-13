import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IndividualUser } from "@/types/users";
import IndividualUserForm from "./IndividualUserForm";

interface IndividualUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user?: IndividualUser;
  onSubmit: (data: Partial<IndividualUser>) => void;
  isLoading?: boolean;
}

const IndividualUserDialog = ({
  open,
  onOpenChange,
  user,
  onSubmit,
  isLoading,
}: IndividualUserDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {user ? "تعديل بيانات المستخدم" : "إضافة مستخدم جديد"}
          </DialogTitle>
        </DialogHeader>
        <IndividualUserForm
          defaultValues={user}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default IndividualUserDialog;