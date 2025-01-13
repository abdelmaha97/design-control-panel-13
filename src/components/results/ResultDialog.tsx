import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Result } from "@/types/results";
import ResultForm from "./ResultForm";

interface ResultDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: Result | null;
  onSave: (result: Result) => void;
}

const ResultDialog = ({ open, onOpenChange, result, onSave }: ResultDialogProps) => {
  const form = useForm<Result>({
    defaultValues: {
      type: "tender",
      status: "draft",
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  useEffect(() => {
    if (result) {
      form.reset(result);
    } else {
      form.reset({
        type: "tender",
        status: "draft",
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }, [result, form]);

  const onSubmit = (data: Result) => {
    onSave({
      ...data,
      id: result?.id || Math.random().toString(),
      updated_at: new Date(),
      created_at: result?.created_at || new Date(),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            {result ? "تعديل" : "إضافة"} نتيجة
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 px-2 md:px-4">
          <ResultForm
            form={form}
            onSubmit={onSubmit}
            isEditing={!!result}
            onCancel={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultDialog;