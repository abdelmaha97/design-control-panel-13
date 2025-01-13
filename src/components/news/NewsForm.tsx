import { News } from "@/types/news";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ImageUpload from "./ImageUpload";
import { UseFormReturn } from "react-hook-form";

interface NewsFormProps {
  form: UseFormReturn<News>;
  onSubmit: (data: News) => void;
  isEditing: boolean;
  onCancel: () => void;
}

const NewsForm = ({ form, onSubmit, isEditing, onCancel }: NewsFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>النوع</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر النوع" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="news">خبر</SelectItem>
                    <SelectItem value="event">فعالية</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الحالة</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="draft">مسودة</SelectItem>
                    <SelectItem value="published">منشور</SelectItem>
                    <SelectItem value="archived">مؤرشف</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>العنوان</FormLabel>
              <FormControl>
                <Input placeholder="أدخل العنوان" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>المحتوى</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="أدخل المحتوى" 
                  {...field} 
                  className="min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageUpload
          form={form}
          name="image_url"
          label="الصورة"
        />

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={onCancel}>
            إلغاء
          </Button>
          <Button type="submit">{isEditing ? "تحديث" : "إضافة"}</Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsForm;