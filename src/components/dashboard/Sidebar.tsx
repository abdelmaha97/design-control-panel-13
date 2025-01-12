import { useState } from "react";
import { Menu, Home, Users, FileText, Bell, Settings, Folder, Newspaper, Megaphone, Briefcase, Building, User, Gavel, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import SidebarItem from "./SidebarItem";
import SidebarDropdown from "./SidebarDropdown";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
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
        <SidebarItem icon={<Home className="h-5 w-5" />} label="الرئيسية" active to="/" sidebarOpen={sidebarOpen} />
        
        <SidebarDropdown 
          icon={<Folder className="h-5 w-5" />}
          label="إدارة المحتوى"
          sidebarOpen={sidebarOpen}
          items={[
            { icon: <Newspaper className="h-5 w-5" />, label: "الاخبار والفعاليات" },
            { icon: <Megaphone className="h-5 w-5" />, label: "اعلان النتائج" },
            { icon: <Briefcase className="h-5 w-5" />, label: "المشاريع" },
          ]}
        />

        <SidebarDropdown 
          icon={<Users className="h-5 w-5" />}
          label="إدارة المستخدمين"
          sidebarOpen={sidebarOpen}
          items={[
            { icon: <User className="h-5 w-5" />, label: "افراد" },
            { icon: <Building className="h-5 w-5" />, label: "شركات" },
          ]}
        />

        <SidebarItem icon={<Briefcase className="h-5 w-5" />} label="إدارة الوظائف" sidebarOpen={sidebarOpen} />
        <SidebarItem icon={<Gavel className="h-5 w-5" />} label="إدارة المناقصات" sidebarOpen={sidebarOpen} />
        <SidebarItem icon={<DollarSign className="h-5 w-5" />} label="إدارة المزادات" sidebarOpen={sidebarOpen} />
        <SidebarItem icon={<FileText className="h-5 w-5" />} label="إدارة التقارير" to="/reports" sidebarOpen={sidebarOpen} />
        <SidebarItem icon={<Bell className="h-5 w-5" />} label="الإشعارات" to="/notifications" sidebarOpen={sidebarOpen} />
        <SidebarItem icon={<Settings className="h-5 w-5" />} label="الإعدادات" sidebarOpen={sidebarOpen} />
      </nav>
    </div>
  );
};

export default Sidebar;