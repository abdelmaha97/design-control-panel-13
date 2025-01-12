import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartLegend, ChartTooltip } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';

// Dummy data for demonstration
const data = [
  { name: 'يناير', tenders: 4000, jobs: 2400, projects: 2400 },
  { name: 'فبراير', tenders: 3000, jobs: 1398, projects: 2210 },
  { name: 'مارس', tenders: 2000, jobs: 9800, projects: 2290 },
  { name: 'ابريل', tenders: 2780, jobs: 3908, projects: 2000 },
  { name: 'مايو', tenders: 1890, jobs: 4800, projects: 2181 },
  { name: 'يونيو', tenders: 2390, jobs: 3800, projects: 2500 },
];

const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [activityType, setActivityType] = useState('all');

  const exportToPDF = () => {
    console.log('Exporting to PDF...');
    // Implementation for PDF export would go here
  };

  const exportToExcel = () => {
    console.log('Exporting to Excel...');
    // Implementation for Excel export would go here
  };

  return (
    <div className="p-6 space-y-6" dir="rtl">
      <Card>
        <CardHeader>
          <CardTitle>تقارير الأداء</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <Label htmlFor="startDate">من تاريخ</Label>
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="endDate">إلى تاريخ</Label>
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="activityType">نوع النشاط</Label>
              <select
                id="activityType"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">الكل</option>
                <option value="tenders">المناقصات</option>
                <option value="jobs">الوظائف</option>
                <option value="projects">المشاريع</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <ChartContainer className="h-[400px]" config={{}}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tenders" name="المناقصات" fill="#8884d8" />
                <Bar dataKey="jobs" name="الوظائف" fill="#82ca9d" />
                <Bar dataKey="projects" name="المشاريع" fill="#ffc658" />
              </BarChart>
            </ChartContainer>
          </div>

          <div className="flex gap-4 justify-end">
            <Button onClick={exportToPDF} className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              تصدير PDF
            </Button>
            <Button onClick={exportToExcel} className="flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4" />
              تصدير Excel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;