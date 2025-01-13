import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IndividualUser } from "@/types/users";
import IndividualUserDialog from "@/components/users/IndividualUserDialog";
import { UserPlus, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

// بيانات تجريبية
const mockUsers: IndividualUser[] = [
  {
    id: "1",
    email: "ahmed@example.com",
    name: "أحمد محمد",
    phone: "0501234567",
    role: "user",
    type: "individual",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      id: "1",
      user_id: "1",
      national_id: "1234567890",
      date_of_birth: "1990-01-01",
      address: "شارع الملك فهد",
      city: "الرياض",
      occupation: "مهندس",
      education_level: "بكالوريوس",
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "2",
    email: "sara@example.com",
    name: "سارة أحمد",
    phone: "0507654321",
    role: "user",
    type: "individual",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      id: "2",
      user_id: "2",
      national_id: "0987654321",
      date_of_birth: "1992-05-15",
      address: "شارع العليا",
      city: "جدة",
      occupation: "طبيبة",
      education_level: "دكتوراه",
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "3",
    email: "khalid@example.com",
    name: "خالد عبدالله",
    phone: "0509876543",
    role: "user",
    type: "individual",
    status: "inactive",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      id: "3",
      user_id: "3",
      national_id: "5432167890",
      date_of_birth: "1988-12-20",
      address: "شارع الأمير محمد",
      city: "الدمام",
      occupation: "محاسب",
      education_level: "ماجستير",
      created_at: new Date().toISOString(),
    },
  },
];

const IndividualUsersPage = () => {
  const [users, setUsers] = useState<IndividualUser[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<IndividualUser | undefined>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = (data: Partial<IndividualUser>) => {
    if (selectedUser) {
      // تحديث مستخدم موجود
      setUsers(users.map(user => 
        user.id === selectedUser.id ? { ...user, ...data } : user
      ));
    } else {
      // إضافة مستخدم جديد
      const newUser: IndividualUser = {
        ...data,
        id: Math.random().toString(),
        role: "user",
        type: "individual",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        profile: {
          ...data.profile!,
          id: Math.random().toString(),
          user_id: Math.random().toString(),
          created_at: new Date().toISOString(),
        },
      } as IndividualUser;
      setUsers([...users, newUser]);
    }
    setDialogOpen(false);
    setSelectedUser(undefined);
  };

  const handleDelete = (user: IndividualUser) => {
    setUsers(users.filter(u => u.id !== user.id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600';
      case 'inactive':
        return 'text-gray-600';
      case 'suspended':
        return 'text-red-600';
      default:
        return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'نشط';
      case 'inactive':
        return 'غير نشط';
      case 'suspended':
        return 'موقوف';
      default:
        return status;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة المستخدمين - الأفراد</h1>
        <Button
          onClick={() => {
            setSelectedUser(undefined);
            setDialogOpen(true);
          }}
        >
          <UserPlus className="h-4 w-4 ml-2" />
          إضافة مستخدم
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الاسم</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>رقم الهاتف</TableHead>
              <TableHead>رقم الهوية</TableHead>
              <TableHead>المدينة</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>تاريخ التسجيل</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.profile.national_id}</TableCell>
                <TableCell>{user.profile.city}</TableCell>
                <TableCell>
                  <span className={getStatusColor(user.status)}>
                    {getStatusText(user.status)}
                  </span>
                </TableCell>
                <TableCell>
                  {format(new Date(user.created_at), 'dd MMMM yyyy', { locale: ar })}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedUser(user);
                        setDialogOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(user)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <IndividualUserDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        user={selectedUser}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default IndividualUsersPage;