
import { Calendar, Users, FileText, Hospital, Settings, Home, User, Phone } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Patients",
    url: "/patients",
    icon: Users,
  },
  {
    title: "Appointments",
    url: "/appointments",
    icon: Calendar,
  },
  {
    title: "Medical Records",
    url: "/records",
    icon: FileText,
  },
  {
    title: "Pharmacy",
    url: "/pharmacy",
    icon: Hospital,
  },
  {
    title: "Emergency",
    url: "/emergency",
    icon: Phone,
  },
];

const adminItems = [
  {
    title: "User Management",
    url: "/users",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <Hospital className="h-8 w-8 text-sidebar-primary" />
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">Afya Sahani</h2>
            <p className="text-sm text-sidebar-foreground/70">HMS Kenya</p>
          </div>
        </div>
        <div className="kenya-flag-accent mt-4"></div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-sidebar-foreground/70">
          <p>Afya Sahani HMS v1.0</p>
          <p>Made for Kenya Healthcare</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
