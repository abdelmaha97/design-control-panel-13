import { useForm } from "react-hook-form";
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
import { Job, JobType, JobStatus } from "@/types/jobs";
import { useToast } from "@/components/ui/use-toast";

interface JobFormProps {
  job?: Job | null;
  onSuccess: () => void;
}

const JobForm = ({ job, onSuccess }: JobFormProps) => {
  const { toast } = useToast();
  const form = useForm<Job>({
    defaultValues: {
      job_number: "",
      title: "",
      description: "",
      type: "full_time",
      location: "",
      salary_range: "",
      requirements: "",
      benefits: "",
      notes: "",
      status: "draft",
      deadline: new Date(),
      ...job,
    },
  });

  const onSubmit = async (data: Job) => {
    try {
      console.log("Submitting job data:", data);
      // TODO: Implement API call to save job
      toast({
        title: job ? "تم تحديث الوظيفة بنجاح" : "تم إضافة الوظيفة بنجاح",
        description: `الوظيفة: ${data.title}`,
      });
      onSuccess();
    } catch (error) {
      console.error("Error saving job:", error);
      toast({
        variant: "destructive",
        title: "حدث خطأ",
        description: "لم نتمكن من حفظ الوظيفة. الرجاء المحاولة مرة أخرى.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-2 md:p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="job_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg">رقم الوظيفة</FormLabel>
                <FormControl>
                  <Input className="text-base md:text-lg p-2 md:p-3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg">المسمى الوظيفي</FormLabel>
                <FormControl>
                  <Input className="text-base md:text-lg p-2 md:p-3" {...field} />
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
              <FormLabel className="text-base md:text-lg">الوصف الوظيفي</FormLabel>
              <FormControl>
                <Textarea className="min-h-[100px] md:min-h-[150px] text-base md:text-lg p-2 md:p-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg">نوع الوظيفة</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-base md:text-lg p-2 md:p-3">
                      <SelectValue placeholder="اختر نوع الوظيفة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="full_time">دوام كامل</SelectItem>
                    <SelectItem value="part_time">دوام جزئي</SelectItem>
                    <SelectItem value="contract">عقد</SelectItem>
                    <SelectItem value="temporary">مؤقت</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg">الموقع</FormLabel>
                <FormControl>
                  <Input className="text-base md:text-lg p-2 md:p-3" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="salary_range"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base md:text-lg">نطاق الراتب</FormLabel>
              <FormControl>
                <Input className="text-base md:text-lg p-2 md:p-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base md:text-lg">المتطلبات</FormLabel>
              <FormControl>
                <Textarea className="min-h-[100px] md:min-h-[150px] text-base md:text-lg p-2 md:p-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="benefits"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base md:text-lg">المزايا</FormLabel>
              <FormControl>
                <Textarea className="min-h-[100px] md:min-h-[150px] text-base md:text-lg p-2 md:p-3" {...field} />
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
              <FormLabel className="text-base md:text-lg">ملاحظات</FormLabel>
              <FormControl>
                <Textarea className="min-h-[100px] md:min-h-[150px] text-base md:text-lg p-2 md:p-3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg">الحالة</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-base md:text-lg p-2 md:p-3">
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="draft">مسودة</SelectItem>
                    <SelectItem value="published">منشور</SelectItem>
                    <SelectItem value="closed">مغلق</SelectItem>
                    <SelectItem value="archived">مؤرشف</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg">تاريخ الانتهاء</FormLabel>
                <FormControl>
                  <Input 
                    type="date" 
                    className="text-base md:text-lg p-2 md:p-3"
                    {...field}
                    value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 mt-8">
          <Button 
            type="submit"
            className="w-full sm:w-auto text-base md:text-lg py-2 md:py-3 px-4 md:px-6"
          >
            {job ? "تحديث" : "إضافة"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default JobForm;