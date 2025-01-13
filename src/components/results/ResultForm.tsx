import { Result } from "@/types/results";
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
import { UseFormReturn } from "react-hook-form";

interface ResultFormProps {
  form: UseFormReturn<Result>;
  onSubmit: (data: Result) => void;
  onCancel: () => void;
  isEditing: boolean;
}

const ResultForm = ({ form, onSubmit, onCancel, isEditing }: ResultFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full mx-auto">
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
                    <SelectItem value="tender">مناقصة</SelectItem>
                    <SelectItem value="auction">مزاد</SelectItem>
                    <SelectItem value="job">وظيفة</SelectItem>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="entity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الجهة</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسم الجهة" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الموقع</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل الموقع" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>التاريخ</FormLabel>
                <FormControl>
                  <Input 
                    type="date" 
                    {...field} 
                    value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''} 
                    onChange={e => field.onChange(new Date(e.target.value))} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المبلغ</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="أدخل المبلغ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الوصف</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="أدخل الوصف" 
                  {...field} 
                  className="min-h-[120px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="selection_method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>طريقة الاختيار</FormLabel>
              <FormControl>
                <Input placeholder="أدخل طريقة الاختيار" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="criteria"
          render={({ field }) => (
            <FormItem>
              <FormLabel>معايير الاختيار</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="أدخل معايير الاختيار" 
                  {...field}
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="winner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الفائز</FormLabel>
              <FormControl>
                <Input placeholder="أدخل اسم الفائز" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ملاحظات</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="أدخل الملاحظات" 
                  {...field}
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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

export default ResultForm;