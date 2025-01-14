import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CompanyUser } from "@/types/users";
import ImageUpload from "@/components/news/ImageUpload";

interface CompanyUserFormProps {
  defaultValues?: Partial<CompanyUser>;
  onSubmit: (data: Partial<CompanyUser>) => void;
  isLoading?: boolean;
}

const CompanyUserForm = ({
  defaultValues,
  onSubmit,
  isLoading
}: CompanyUserFormProps) => {
  const form = useForm<Partial<CompanyUser>>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      photo_url: "",
      type: "company",
      status: "active",
      profile: {
        business_name: "",
        commercial_reg_no: "",
        tax_number: "",
        address: "",
        city: "",
        industry: "",
        company_size: "",
      },
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-5xl mx-auto p-4 md:p-8 lg:p-10">
        {/* صورة الشركة */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8 transition-all duration-200 hover:shadow-md">
          <div className="w-full max-w-lg mx-auto">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-right text-secondary">شعار الشركة</h3>
            <ImageUpload
              form={form}
              name="photo_url"
              label="شعار الشركة"
            />
          </div>
        </div>

        {/* البيانات الأساسية */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-right text-secondary">البيانات الأساسية</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">اسم الشركة</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">رقم الهاتف</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">الحالة</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="اختر الحالة" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="active">نشط</SelectItem>
                      <SelectItem value="inactive">غير نشط</SelectItem>
                      <SelectItem value="suspended">موقوف</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* بيانات الشركة */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8 transition-all duration-200 hover:shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-right text-secondary">بيانات الشركة</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <FormField
              control={form.control}
              name="profile.business_name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">الاسم التجاري</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.commercial_reg_no"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">رقم السجل التجاري</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.tax_number"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">الرقم الضريبي</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.address"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">العنوان</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.city"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">المدينة</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.industry"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">القطاع</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profile.company_size"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-right block">حجم الشركة</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full transition-all duration-200 focus:ring-2 focus:ring-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="w-full sm:w-auto transition-all duration-200 hover:shadow-lg"
          >
            {defaultValues ? "تحديث" : "إضافة"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CompanyUserForm;