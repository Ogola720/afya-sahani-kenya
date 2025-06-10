
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      patient: "John Mwangi",
      action: "Appointment Completed",
      time: "2 hours ago",
      status: "completed",
      doctor: "Dr. Sarah Kimani"
    },
    {
      id: 2,
      patient: "Mary Wanjiku",
      action: "New Registration",
      time: "3 hours ago",
      status: "new",
      doctor: "Reception"
    },
    {
      id: 3,
      patient: "David Kiprotich",
      action: "Prescription Issued",
      time: "4 hours ago",
      status: "prescription",
      doctor: "Dr. James Ochieng"
    },
    {
      id: 4,
      patient: "Grace Akinyi",
      action: "Lab Results",
      time: "5 hours ago",
      status: "results",
      doctor: "Lab Technician"
    },
    {
      id: 5,
      patient: "Samuel Mutua",
      action: "Follow-up Scheduled",
      time: "6 hours ago",
      status: "scheduled",
      doctor: "Dr. Sarah Kimani"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'prescription': return 'bg-purple-100 text-purple-800';
      case 'results': return 'bg-orange-100 text-orange-800';
      case 'scheduled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.patient}</span>
                  <Badge className={getStatusColor(activity.status)}>
                    {activity.action}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {activity.doctor} • {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
