
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Layout/AppSidebar";
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { QuickActions } from "@/components/Dashboard/QuickActions";
import { RecentActivity } from "@/components/Dashboard/RecentActivity";
import { PaymentSummary } from "@/components/Dashboard/PaymentSummary";
import { LoginForm } from "@/components/Auth/LoginForm";
import { Users, Calendar, FileText, Hospital } from "lucide-react";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  const handleLogin = (role: string) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="flex items-center gap-2 p-4 border-b bg-white">
            <SidebarTrigger />
            <span className="text-sm text-muted-foreground">
              Welcome back, Dr. {userRole}
            </span>
          </div>
          
          <DashboardHeader />
          
          <div className="p-6 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Patients"
                value="1,247"
                icon={<Users className="h-4 w-4" />}
                trend={{ value: "12%", isPositive: true }}
              />
              <StatsCard
                title="Today's Appointments"
                value="23"
                icon={<Calendar className="h-4 w-4" />}
                trend={{ value: "5%", isPositive: true }}
              />
              <StatsCard
                title="Active Records"
                value="892"
                icon={<FileText className="h-4 w-4" />}
                trend={{ value: "8%", isPositive: true }}
              />
              <StatsCard
                title="Revenue (KES)"
                value="847,500"
                icon={<Hospital className="h-4 w-4" />}
                trend={{ value: "15%", isPositive: true }}
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <QuickActions />
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <RecentActivity />
                <PaymentSummary />
              </div>
            </div>

            {/* Emergency Alert Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Hospital className="h-5 w-5 text-red-600" />
                <span className="font-medium text-red-800">Emergency Status: Normal</span>
                <span className="text-sm text-red-600">
                  All emergency services operational. Last updated: {new Date().toLocaleTimeString('en-KE')}
                </span>
              </div>
            </div>

            {/* Kenya Health Information */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-green-800">Ministry of Health Integration</h3>
                  <p className="text-sm text-green-600">
                    Connected to Kenya Health Information System (KHIS) • 
                    Data sync status: Active • Last sync: 2 minutes ago
                  </p>
                </div>
                <div className="text-right text-sm text-green-600">
                  <p>National ID verification: ✅ Active</p>
                  <p>NHIF integration: ✅ Connected</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
