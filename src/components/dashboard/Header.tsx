import { Bell, Mail, Settings, LogOut, User, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Header = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      toast({
        title: "تنبيه",
        description: "الرجاء إدخال نص للبحث",
        variant: "destructive",
      });
      return;
    }

    console.log("Searching for:", searchQuery);
    
    // قائمة الصفحات التي يمكن البحث فيها
    const searchableRoutes = [
      { path: "/projects", name: "المشاريع" },
      { path: "/news", name: "الأخبار" },
      { path: "/results", name: "النتائج" },
      { path: "/individual-users", name: "المستخدمين" },
      { path: "/companies", name: "الشركات" },
    ];

    // البحث في جميع الأقسام
    const results = searchableRoutes.map(route => ({
      ...route,
      matches: route.name.toLowerCase().includes(searchQuery.toLowerCase())
    })).filter(result => result.matches);

    if (results.length > 0) {
      // التنقل إلى أول نتيجة مطابقة
      navigate(results[0].path, { 
        state: { searchQuery } 
      });
      
      toast({
        title: "تم العثور على نتائج",
        description: `تم العثور على ${results.length} نتيجة`,
      });
    } else {
      toast({
        title: "لا توجد نتائج",
        description: "لم يتم العثور على نتائج مطابقة",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4 flex-1">
          <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="بحث..."
              className="pr-10 w-full bg-gray-50 border-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                <Settings className="ml-2 h-4 w-4" />
                <span>الإعدادات</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="ml-2 h-4 w-4" />
                <span>تسجيل الخروج</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;