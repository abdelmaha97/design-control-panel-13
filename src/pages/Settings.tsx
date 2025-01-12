import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Globe, Shield, Settings } from "lucide-react";
import { useState } from "react";

const roles = [
  {
    id: 1,
    name: "مدير النظام",
    permissions: ["إدارة المستخدمين", "إدارة الصلاحيات", "إدارة المحتوى", "إدارة الإعدادات"],
  },
  {
    id: 2,
    name: "مشرف",
    permissions: ["إدارة المحتوى", "عرض التقارير"],
  },
  {
    id: 3,
    name: "مستخدم عادي",
    permissions: ["عرض المحتوى"],
  },
];

const Settings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ar");
  const [logo, setLogo] = useState("");

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="h-6 w-6" />
        <h1 className="text-2xl font-bold">إعدادات النظام</h1>
      </div>

      <Tabs defaultValue="roles" dir="rtl">
        <TabsList className="mb-4">
          <TabsTrigger value="roles" className="gap-2">
            <Shield className="h-4 w-4" />
            الأدوار والصلاحيات
          </TabsTrigger>
          <TabsTrigger value="general" className="gap-2">
            <Globe className="h-4 w-4" />
            إعدادات عامة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="roles">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">إدارة الأدوار والصلاحيات</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الدور</TableHead>
                  <TableHead>الصلاحيات</TableHead>
                  <TableHead>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="font-medium">{role.name}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        {role.permissions.map((permission) => (
                          <span
                            key={permission}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {permission}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        تعديل الصلاحيات
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="general">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">الإعدادات العامة</h2>
            <div className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="language">اللغة</Label>
                <select
                  id="language"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="logo">شعار النظام</Label>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setLogo(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {logo && (
                  <div className="mt-2">
                    <img src={logo} alt="Logo preview" className="max-w-xs" />
                  </div>
                )}
              </div>

              <Button>حفظ الإعدادات</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;