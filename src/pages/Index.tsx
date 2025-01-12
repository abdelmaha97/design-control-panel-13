import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { 
  Briefcase, 
  Building2, 
  GanttChartSquare,
  Gavel,
  DollarSign
} from "lucide-react";

// Dummy data - replace with real data from your backend
const chartData = [
  { name: "يناير", value: 12 },
  { name: "فبراير", value: 19 },
  { name: "مارس", value: 15 },
  { name: "أبريل", value: 25 },
  { name: "مايو", value: 22 },
  { name: "يونيو", value: 30 },
];

const notifications = [
  {
    title: "عرض جديد على المناقصة #123",
    time: "منذ 5 دقائق",
    type: "مناقصة"
  },
  {
    title: "تم تقديم طلب وظيفة جديد",
    time: "منذ 15 دقيقة",
    type: "وظيفة"
  },
  {
    title: "تحديث في حالة المشروع #456",
    time: "منذ ساعة",
    type: "مشروع"
  }
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">لوحة التحكم</h2>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Gavel className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">المناقصات الحالية</h3>
                <p className="text-3xl font-bold text-primary">23</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">الوظائف المتاحة</h3>
                <p className="text-3xl font-bold text-primary">45</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">المشاريع قيد التنفيذ</h3>
                <p className="text-3xl font-bold text-primary">12</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-600">المزادات النشطة</h3>
                <p className="text-3xl font-bold text-primary">8</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <Card className="col-span-2 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">إحصائيات النشاط</h3>
              <div className="flex items-center gap-2">
                <GanttChartSquare className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            <div className="h-[300px]">
              <ChartContainer
                className="h-full"
                config={{
                  primary: {
                    theme: {
                      light: "#1e805d",
                      dark: "#1e805d",
                    },
                  },
                }}
              >
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="value" fill="var(--color-primary)" />
                </BarChart>
              </ChartContainer>
            </div>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">آخر التنبيهات</h3>
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="font-medium">{notification.title}</p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>
                  <Badge variant="secondary">{notification.type}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;