import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { News } from "@/types/news";
import NewsForm from "./NewsForm";

interface NewsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  news: News | null;
  onSave: (news: News) => void;
}

const NewsDialog = ({ open, onOpenChange, news, onSave }: NewsDialogProps) => {
  const form = useForm<News>({
    defaultValues: {
      type: "news",
      status: "draft",
      created_at: new Date(),
      updated_at: new Date(),
    },
  });

  useEffect(() => {
    if (news) {
      form.reset(news);
    } else {
      form.reset({
        type: "news",
        status: "draft",
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }, [news, form]);

  const onSubmit = (data: News) => {
    onSave({
      ...data,
      id: news?.id || Math.random().toString(),
      updated_at: new Date(),
      created_at: news?.created_at || new Date(),
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            {news ? "تعديل" : "إضافة"} خبر/فعالية
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <NewsForm
            form={form}
            onSubmit={onSubmit}
            isEditing={!!news}
            onCancel={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDialog;