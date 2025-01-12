import { Bell, Mail, Menu, Search, Home, Settings, Users, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useState } from "react";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* Sidebar */}
      <div 
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          <h1 className={`font-bold text-xl text-primary transition-opacity duration-300 ${
            !sidebarOpen && 'opacity-0 w-0 overflow-hidden'
          }`}>
            لوحة التحكم
          </h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-100"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-4">
          <SidebarItem icon={<Home className="h-5 w-5" />} label="الرئيسية" active sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<Settings className="h-5 w-5" />} label="الإعدادات" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<Users className="h-5 w-5" />} label="المستخدمين" sidebarOpen={sidebarOpen} />
          <SidebarItem icon={<FileText className="h-5 w-5" />} label="التقارير" sidebarOpen={sidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="بحث..."
                  className="pr-10 w-full bg-gray-50 border-0"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Mail className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  5
                </Badge>
              </Button>
              <Avatar className="h-8 w-8">
                <img src="/placeholder.svg" alt="User" className="rounded-full" />
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

const SidebarItem = ({ 
  icon, 
  label, 
  active = false,
  sidebarOpen = true
}: { 
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  sidebarOpen?: boolean;
}) => {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors ${
        active ? 'text-primary border-r-2 border-primary bg-blue-50' : ''
      }`}
    >
      {icon}
      <span className={`font-medium transition-all duration-300 whitespace-nowrap ${
        !sidebarOpen ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
      }`}>
        {label}
      </span>
    </a>
  );
};