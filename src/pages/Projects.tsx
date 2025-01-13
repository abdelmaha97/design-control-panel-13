import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsList from "@/components/projects/ProjectsList";
import ProjectDialog from "@/components/projects/ProjectDialog";
import type { Project } from "@/types/projects";

// Sample data
const initialProjects: Project[] = [
  {
    id: "1",
    project_number: "PRJ-2024-001",
    title: "تطوير البنية التحتية للمنطقة الشمالية",
    image_paths: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"],
    description: "مشروع شامل لتطوير البنية التحتية في المنطقة الشمالية",
    owner_id: "owner1",
    contractor_id: "contractor1",
    location: "المنطقة الشمالية",
    budget: 5000000,
    status: "active",
    type: "بنية تحتية",
    start_date: new Date("2024-01-01"),
    end_date: new Date("2024-12-31"),
    progress: 35,
    team: ["مدير المشروع", "مهندس مدني", "مهندس معماري"],
    risks: ["تأخير التوريدات", "الظروف الجوية"],
    financial_details: ["الميزانية الأولية: 5 مليون"],
    expected_outcomes: ["تحسين شبكة الطرق", "تطوير شبكة المياه"],
    reports: [],
    tools: ["معدات حفر", "معدات بناء"],
    notes: ["ملاحظة: يجب متابعة الجدول الزمني"],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "2",
    project_number: "PRJ-2024-002",
    title: "إنشاء مجمع تعليمي",
    image_paths: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"],
    description: "مشروع إنشاء مجمع تعليمي متكامل",
    owner_id: "owner2",
    contractor_id: "contractor2",
    location: "المنطقة الشرقية",
    budget: 10000000,
    status: "planning",
    type: "تعليمي",
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-08-31"),
    progress: 0,
    team: ["مدير المشروع", "مهندس إنشائي", "مصمم داخلي"],
    risks: ["تأخير التراخيص", "زيادة تكاليف المواد"],
    financial_details: ["الميزانية الأولية: 10 مليون"],
    expected_outcomes: ["مدرسة ابتدائية", "مركز تدريب", "مكتبة عامة"],
    reports: [],
    tools: ["معدات بناء", "أدوات تشطيب"],
    notes: ["ملاحظة: جاري استخراج التراخيص"],
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "3",
    project_number: "PRJ-2024-003",
    title: "تطوير حديقة عامة",
    image_paths: ["https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"],
    description: "مشروع تطوير وتجميل حديقة عامة",
    owner_id: "owner3",
    contractor_id: "contractor3",
    location: "المنطقة الغربية",
    budget: 2000000,
    status: "completed",
    type: "ترفيهي",
    start_date: new Date("2024-02-01"),
    end_date: new Date("2024-05-31"),
    progress: 100,
    team: ["مدير المشروع", "مهندس تنسيق حدائق", "فني ري"],
    risks: ["الظروف الجوية"],
    financial_details: ["الميزانية الأولية: 2 مليون"],
    expected_outcomes: ["مناطق خضراء", "ملاعب أطفال", "مناطق جلوس"],
    reports: [],
    tools: ["معدات زراعة", "معدات ري"],
    notes: ["تم الانتهاء من المشروع بنجاح"],
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleAdd = () => {
    setSelectedProject(null);
    setIsDialogOpen(true);
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleSave = (project: Project) => {
    if (selectedProject) {
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    } else {
      setProjects([...projects, { ...project, id: crypto.randomUUID() }]);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">إدارة المشاريع</h1>
        <Button onClick={handleAdd}>
          <Plus className="h-4 w-4 ml-2" />
          إضافة مشروع
        </Button>
      </div>

      <ProjectsList
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProjectDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        project={selectedProject}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProjectsPage;