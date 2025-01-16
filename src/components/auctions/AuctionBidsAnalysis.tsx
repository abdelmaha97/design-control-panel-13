import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface AuctionBidsAnalysisProps {
  auctionId: string;
}

const AuctionBidsAnalysis = ({ auctionId }: AuctionBidsAnalysisProps) => {
  // Sample analysis data
  const bidsData = [
    { name: "العرض 1", amount: 250000, compliance: 95 },
    { name: "العرض 2", amount: 248000, compliance: 90 },
    { name: "العرض 3", amount: 245000, compliance: 85 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>تحليل العروض</CardTitle>
          <CardDescription>
            تحليل مقارن للعروض المقدمة من حيث السعر ومطابقة الشروط
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bidsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" name="قيمة العرض" fill="#2563eb" />
                <Bar dataKey="compliance" name="نسبة المطابقة" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>التوصيات</CardTitle>
          <CardDescription>
            توصيات مبنية على تحليل العروض المقدمة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">
                العرض الأعلى تقييماً
              </h4>
              <p className="text-green-700">
                العرض رقم 1 هو الأفضل من حيث السعر ومطابقة الشروط، حيث قدم أعلى سعر
                مع نسبة مطابقة 95%.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">ملخص المقارنة</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>جميع العروض مستوفية للحد الأدنى من الشروط</li>
                  <li>
                    الفرق بين أعلى وأدنى عرض: {(250000 - 245000).toLocaleString()} ريال
                  </li>
                  <li>متوسط نسبة المطابقة: 90%</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuctionBidsAnalysis;