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
import { CompanyUser } from "@/types/users";
import CompanyUserDialog from "@/components/users/CompanyUserDialog";
import { UserPlus, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

// بيانات تجريبية
const mockCompanies: CompanyUser[] = [
  {
    id: "1",
    email: "info@company1.com",
    name: "شركة الأول للتقنية",
    phone: "0114567890",
    role: "user",
    type: "company",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      id: "1",
      user_id: "1",
      business_name: "شركة الأول",
      commercial_reg_no: "1234567890",
      tax_number: "300000000",
      address: "شارع الملك فهد",
      city: "الرياض",
      industry: "تقنية المعلومات",
      company_size: "متوسطة",
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "2",
    email: "info@company2.com",
    name: "شركة الثاني للمقاولات",
    phone: "0126789012",
    role: "user",
    type: "company",
    status: "active",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      id: "2",
      user_id: "2",
      business_name: "شركة الثاني",
      commercial_reg_no: "0987654321",
      tax_number: "300000001",
      address: "شارع التحلية",
      city: "جدة",
      industry: "المقاولات",
      company_size: "كبيرة",
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "3",
    email: "info@company3.com",
    name: "شركة الثالث للتجارة",
    phone: "0138901234",
    role: "user",
    type: "company",
    status: "inactive",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    profile: {
      id: "3",
      user_id: "3",
      business_name: "شركة الثالث",
      commercial_reg_no: "5432167890",
      tax_number: "300000002",
      address: "شارع الظهران",
      city: "الدمام",
      industry: "التجارة",
      company_size: "صغيرة",
      created_at: new Date().toISOString(),
    },
  },
];

const CompaniesPage = () => {
  const [companies, setCompanies] = useState<CompanyUser[]>(mockCompanies);
  const [selectedCompany, setSelectedCompany] = useState<CompanyUser | undefined>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = (data: Partial<CompanyUser>) => {
    if (selectedCompany) {
      // تحديث شركة موجودة
      setCompanies(companies.map(company => 
        company.id === selectedCompany.id ? { ...company, ...data } : company
      ));
    } else {
      // إضافة شركة جديدة
      const newCompany: CompanyUser = {
        ...data,
        id: Math.random().toString(),
        role: "user",
        type: "company",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        profile: {
          ...data.profile!,
          id: Math.random().toString(),
          user_id: Math.random().toString(),
          created_at: new Date().toISOString(),
        },
      } as CompanyUser;
      setCompanies([...companies, newCompany]);
    }
    setDialogOpen(false);
    setSelectedCompany(undefined);
  };

  const handleDelete = (company: CompanyUser) => {
    setCompanies(companies.filter(c => c.id !== company.id));
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
        <h1 className="text-2xl font-bold">إدارة المستخدمين - الشركات</h1>
        <Button
          onClick={() => {
            setSelectedCompany(undefined);
            setDialogOpen(true);
          }}
        >
          <UserPlus className="h-4 w-4 ml-2" />
          إضافة شركة
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>اسم الشركة</TableHead>
              <TableHead>البريد الإلكتروني</TableHead>
              <TableHead>رقم الهاتف</TableHead>
              <TableHead>السجل التجاري</TableHead>
              <TableHead>المدينة</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>تاريخ التسجيل</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.email}</TableCell>
                <TableCell>{company.phone}</TableCell>
                <TableCell>{company.profile.commercial_reg_no}</TableCell>
                <TableCell>{company.profile.city}</TableCell>
                <TableCell>
                  <span className={getStatusColor(company.status)}>
                    {getStatusText(company.status)}
                  </span>
                </TableCell>
                <TableCell>
                  {format(new Date(company.created_at), 'dd MMMM yyyy', { locale: ar })}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        setSelectedCompany(company);
                        setDialogOpen(true);
                      }}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(company)}
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

      <CompanyUserDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        user={selectedCompany}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CompaniesPage;