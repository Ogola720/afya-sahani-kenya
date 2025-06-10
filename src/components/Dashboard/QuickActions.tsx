
import { Calendar, Users, FileText, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  const actions = [
    {
      title: "New Patient",
      description: "Register a new patient",
      icon: Users,
      action: () => console.log("New patient registration"),
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Schedule Appointment",
      description: "Book an appointment",
      icon: Calendar,
      action: () => console.log("Schedule appointment"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Add Medical Record",
      description: "Create new EMR entry",
      icon: FileText,
      action: () => console.log("Add medical record"),
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "Emergency Admission",
      description: "Quick emergency intake",
      icon: Hospital,
      action: () => console.log("Emergency admission"),
      color: "bg-red-500 hover:bg-red-600"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start gap-2 hover:shadow-md transition-shadow"
              onClick={action.action}
            >
              <div className="flex items-center gap-2 w-full">
                <div className={`p-2 rounded ${action.color} text-white`}>
                  <action.icon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
