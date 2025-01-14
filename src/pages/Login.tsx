import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === "admin" && password === "123456") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك في لوحة التحكم",
      });
    } else {
      toast({
        variant: "destructive",
        title: "خطأ في تسجيل الدخول",
        description: "اسم المستخدم أو كلمة المرور غير صحيحة",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            تسجيل الدخول
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 text-right">
                اسم المستخدم
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 text-right"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="أدخل اسم المستخدم"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right">
                كلمة المرور
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 text-right"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full flex justify-center py-2 px-4"
          >
            تسجيل الدخول
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;