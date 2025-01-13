import { useState } from "react";
import { Project } from "@/types/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useIsMobile } from "@/hooks/use-mobile";

interface ProjectsListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const ProjectsList = ({ projects, onEdit, onDelete }: ProjectsListProps) => {
  const isMobile = useIsMobile();

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "planning":
        return "bg-yellow-500";
      case "active":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      case "cancelled":
        return "bg-red-500";
    }
  };

  const getStatusLabel = (status: Project["status"]) => {
    switch (status) {
      case "planning":
        return "تخطيط";
      case "active":
        return "نشط";
      case "completed":
        return "مكتمل";
      case "cancelled":
        return "ملغي";
    }
  };

  const renderMobileView = () => (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-white p-4 rounded-lg shadow space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg">{project.title}</h3>
              <p className="text-sm text-gray-500">#{project.project_number}</p>
            </div>
            <Badge className={getStatusColor(project.status)}>
              {getStatusLabel(project.status)}
            </Badge>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>الموقع: {project.location}</p>
            <p>الميزانية: {project.budget.toLocaleString()} ريال</p>
            <p>نسبة الإنجاز: {project.progress}%</p>
            <p>تاريخ البداية: {format(new Date(project.start_date), "dd MMMM yyyy", { locale: ar })}</p>
          </div>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" onClick={() => onEdit(project)} className="flex-1">
              تعديل
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => onDelete(project.id)}
              className="flex-1"
            >
              حذف
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDesktopView = () => (
    <div className="border rounded-lg">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم المشروع</TableHead>
              <TableHead>العنوان</TableHead>
              <TableHead>الموقع</TableHead>
              <TableHead>الميزانية</TableHead>
              <TableHead>نسبة الإنجاز</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>تاريخ البداية</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.project_number}</TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.budget.toLocaleString()} ريال</TableCell>
                <TableCell>{project.progress}%</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusLabel(project.status)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {format(new Date(project.start_date), "dd MMMM yyyy", { locale: ar })}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => onEdit(project)}>
                      تعديل
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(project.id)}
                    >
                      حذف
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default ProjectsList;