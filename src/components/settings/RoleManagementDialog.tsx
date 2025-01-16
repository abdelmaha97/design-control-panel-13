import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Permission, Role, RoleType } from "@/types/roles";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RoleManagementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (role: Role) => void;
  role?: Role | null;
}

const availablePermissions: { label: string; value: Permission }[] = [
  { label: "إدارة المستخدمين", value: "manage_users" },
  { label: "إدارة الأدوار", value: "manage_roles" },
  { label: "إدارة الأقسام", value: "manage_departments" },
  { label: "عرض البيانات", value: "view_data" },
  { label: "تعديل البيانات", value: "edit_data" },
  { label: "إضافة مستخدمين", value: "add_users" },
  { label: "حذف مستخدمين", value: "delete_users" },
];

const roleTypes: { label: string; value: RoleType }[] = [
  { label: "مدير النظام", value: "admin" },
  { label: "مدير قسم", value: "department_manager" },
  { label: "مشرف", value: "supervisor" },
];

const RoleManagementDialog = ({
  open,
  onOpenChange,
  onSubmit,
  role,
}: RoleManagementDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "" as RoleType,
    permissions: [] as Permission[],
  });

  useEffect(() => {
    if (role) {
      setFormData({
        name: role.name,
        type: role.type,
        permissions: role.permissions,
      });
    } else {
      setFormData({
        name: "",
        type: "supervisor",
        permissions: [],
      });
    }
  }, [role]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRole: Role = {
      id: role?.id || Math.random().toString(),
      name: formData.name,
      type: formData.type,
      permissions: formData.permissions,
      created_at: role?.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    onSubmit(newRole);
    onOpenChange(false);
  };

  const togglePermission = (permission: Permission) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{role ? "تعديل دور" : "إضافة دور جديد"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">اسم الدور</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="أدخل اسم الدور"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">نوع الدور</Label>
            <Select
              value={formData.type}
              onValueChange={(value: RoleType) =>
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="اختر نوع الدور" />
              </SelectTrigger>
              <SelectContent>
                {roleTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>الصلاحيات</Label>
            <div className="grid gap-2">
              {availablePermissions.map((permission) => (
                <div key={permission.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={permission.value}
                    checked={formData.permissions.includes(permission.value)}
                    onCheckedChange={() => togglePermission(permission.value)}
                  />
                  <Label
                    htmlFor={permission.value}
                    className="text-sm font-normal cursor-pointer mr-2"
                  >
                    {permission.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              إلغاء
            </Button>
            <Button type="submit">حفظ</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RoleManagementDialog;