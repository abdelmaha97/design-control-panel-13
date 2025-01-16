import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Globe, Shield, Settings as SettingsIcon, UserPlus, Users } from "lucide-react";
import UserManagementDialog from "@/components/settings/UserManagementDialog";
import RoleManagementDialog from "@/components/settings/RoleManagementDialog";
import { Role, RoleType } from "@/types/roles";

// بيانات تجريبية للأدوار
const mockRoles: Role[] = [
  {
    id: "1",
    name: "مدير النظام",
    type: "admin",
    permissions: [
      "manage_users",
      "manage_roles",
      "manage_departments",
      "view_data",
      "edit_data",
      "add_users",
      "delete_users"
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "مدير قسم",
    type: "department_manager",
    permissions: [
      "manage_departments",
      "view_data",
      "edit_data",
      "add_users"
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "مشرف",
    type: "supervisor",
    permissions: [
      "view_data",
      "edit_data"
    ],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const SettingsPage = () => {
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isRoleDialogOpen, setIsRoleDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [roles, setRoles] = useState<Role[]>(mockRoles);

  const handleAddRole = (role: Role) => {
    setRoles([...roles, role]);
    setIsRoleDialogOpen(false);
  };

  const handleEditRole = (role: Role) => {
    setRoles(roles.map(r => r.id === role.id ? role : r));
    setIsRoleDialogOpen(false);
    setSelectedRole(null);
  };

  const getPermissionText = (permission: string) => {
    const permissionMap: Record<string, string> = {
      manage_users: "إدارة المستخدمين",
      manage_roles: "إدارة الأدوار",
      manage_departments: "إدارة الأقسام",
      view_data: "عرض البيانات",
      edit_data: "تعديل البيانات",
      add_users: "إضافة مستخدمين",
      delete_users: "حذف مستخدمين"
    };
    return permissionMap[permission] || permission;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <SettingsIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">إعدادات النظام</h1>
      </div>

      <Tabs defaultValue="users" dir="rtl">
        <TabsList>
          <TabsTrigger value="users" className="gap-2">
            <Users className="h-4 w-4" />
            المستخدمين والصلاحيات
          </TabsTrigger>
          <TabsTrigger value="general" className="gap-2">
            <Globe className="h-4 w-4" />
            إعدادات عامة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">إدارة المستخدمين والصلاحيات</h2>
              <div className="flex gap-2">
                <Button onClick={() => setIsUserDialogOpen(true)}>
                  <UserPlus className="h-4 w-4 ml-2" />
                  إضافة مستخدم
                </Button>
                <Button onClick={() => setIsRoleDialogOpen(true)}>
                  <Shield className="h-4 w-4 ml-2" />
                  إضافة دور
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">الأدوار والصلاحيات</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>الدور</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>الصلاحيات</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-medium">{role.name}</TableCell>
                        <TableCell>{role.type}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            {role.permissions.map((permission) => (
                              <span
                                key={permission}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                              >
                                {getPermissionText(permission)}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              setSelectedRole(role);
                              setIsRoleDialogOpen(true);
                            }}
                          >
                            تعديل الصلاحيات
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="general">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">الإعدادات العامة</h2>
            <div className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="system-name">اسم النظام</Label>
                <Input id="system-name" placeholder="أدخل اسم النظام" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="system-email">البريد الإلكتروني للنظام</Label>
                <Input id="system-email" type="email" placeholder="أدخل البريد الإلكتروني" />
              </div>

              <Button>حفظ الإعدادات</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <UserManagementDialog
        open={isUserDialogOpen}
        onOpenChange={setIsUserDialogOpen}
        roles={roles}
      />

      <RoleManagementDialog
        open={isRoleDialogOpen}
        onOpenChange={setIsRoleDialogOpen}
        onSubmit={selectedRole ? handleEditRole : handleAddRole}
        role={selectedRole}
      />
    </div>
  );
};

export default SettingsPage;