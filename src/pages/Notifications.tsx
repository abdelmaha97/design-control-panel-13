import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notifications = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  
  // Notification preferences state
  const [preferences, setPreferences] = useState({
    email: true,
    push: true,
    sms: false,
    news: true,
    updates: true,
    marketing: false,
  });

  const handleSendNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !message) {
      toast({
        variant: "destructive",
        title: "خطأ",
        description: "الرجاء ملء جميع الحقول المطلوبة",
      });
      return;
    }

    toast({
      title: "تم إرسال الإشعار بنجاح",
      description: "تم إرسال الإشعار إلى جميع المستخدمين المحددين",
    });
    setTitle("");
    setMessage("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">إدارة الإشعارات</h1>
      
      <Tabs defaultValue="send" dir="rtl">
        <TabsList className="mb-4">
          <TabsTrigger value="send">إرسال إشعار</TabsTrigger>
          <TabsTrigger value="preferences">تفضيلات الإشعارات</TabsTrigger>
        </TabsList>

        <TabsContent value="send">
          <Card>
            <CardHeader>
              <CardTitle>إرسال إشعار جديد</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendNotification} className="space-y-4">
                <div>
                  <Label htmlFor="title">عنوان الإشعار</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="أدخل عنوان الإشعار"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">نص الإشعار</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="أدخل نص الإشعار"
                    className="mt-1"
                  />
                </div>

                <Button type="submit">إرسال الإشعار</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>تفضيلات الإشعارات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email">إشعارات البريد الإلكتروني</Label>
                  <Switch
                    id="email"
                    checked={preferences.email}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, email: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="push">الإشعارات الفورية</Label>
                  <Switch
                    id="push"
                    checked={preferences.push}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, push: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="sms">إشعارات الرسائل النصية</Label>
                  <Switch
                    id="sms"
                    checked={preferences.sms}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, sms: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="news">الأخبار والتحديثات</Label>
                  <Switch
                    id="news"
                    checked={preferences.news}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, news: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="updates">تحديثات النظام</Label>
                  <Switch
                    id="updates"
                    checked={preferences.updates}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, updates: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing">الرسائل التسويقية</Label>
                  <Switch
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, marketing: checked }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Notifications;