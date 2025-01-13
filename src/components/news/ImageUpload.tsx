import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Image } from "lucide-react";

interface ImageUploadProps {
  form: any;
  name: string;
  label: string;
}

const ImageUpload = ({ form, name, label }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "خطأ",
          description: "حجم الصورة يجب أن يكون أقل من 5 ميجابايت",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        form.setValue(name, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="space-y-4">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
              />
              {(preview || field.value) && (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                  <img
                    src={preview || field.value}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {!preview && !field.value && (
                <div className="w-full h-48 rounded-lg border border-dashed flex items-center justify-center">
                  <div className="text-center space-y-2 text-muted-foreground">
                    <Image className="w-8 h-8 mx-auto" />
                    <div>لم يتم اختيار صورة</div>
                  </div>
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ImageUpload;