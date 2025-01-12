import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">مرحباً بك!</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-2">المستخدمين النشطين</h3>
            <p className="text-3xl font-bold text-primary">1,234</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-2">إجمالي المبيعات</h3>
            <p className="text-3xl font-bold text-primary">$45,678</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="font-semibold mb-2">الطلبات الجديدة</h3>
            <p className="text-3xl font-bold text-primary">89</p>
          </Card>
        </div>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">آخر النشاطات</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">تم إضافة مستخدم جديد</p>
                  <p className="text-sm text-gray-500">منذ 5 دقائق</p>
                </div>
                <Badge>جديد</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;