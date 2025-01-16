import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import TenderDialog from "@/components/tenders/TenderDialog";
import TendersList from "@/components/tenders/TendersList";
import TenderSubmissionsAnalysis from "@/components/tenders/TenderSubmissionsAnalysis";
import TopSubmissions from "@/components/tenders/TopSubmissions";
import { Tender } from "@/types/tenders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tenders = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTender, setSelectedTender] = useState<Tender | null>(null);

  const handleAdd = () => {
    setSelectedTender(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (tender: Tender) => {
    setSelectedTender(tender);
    setIsDialogOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">إدارة المناقصات</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة مناقصة
        </Button>
      </div>

      <Tabs defaultValue="tenders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="tenders">المناقصات</TabsTrigger>
          <TabsTrigger value="analysis">تحليل العطاءات</TabsTrigger>
          <TabsTrigger value="submissions">أفضل العطاءات</TabsTrigger>
        </TabsList>

        <TabsContent value="tenders">
          <TendersList onEdit={handleEdit} />
        </TabsContent>

        <TabsContent value="analysis">
          {selectedTender ? (
            <TenderSubmissionsAnalysis tenderId={selectedTender.id} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              الرجاء اختيار مناقصة لعرض تحليل العطاءات
            </div>
          )}
        </TabsContent>

        <TabsContent value="submissions">
          {selectedTender ? (
            <TopSubmissions tenderId={selectedTender.id} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              الرجاء اختيار مناقصة لعرض أفضل العطاءات
            </div>
          )}
        </TabsContent>
      </Tabs>

      <TenderDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        tender={selectedTender}
      />
    </div>
  );
};

export default Tenders;