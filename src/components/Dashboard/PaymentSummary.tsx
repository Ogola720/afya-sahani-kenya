
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function PaymentSummary() {
  const payments = [
    {
      id: 1,
      patient: "Alice Njeri",
      amount: "KES 2,500",
      method: "M-Pesa",
      status: "completed",
      time: "1 hour ago"
    },
    {
      id: 2,
      patient: "Peter Otieno",
      amount: "KES 1,800",
      method: "Cash",
      status: "completed",
      time: "2 hours ago"
    },
    {
      id: 3,
      patient: "Susan Wambui",
      amount: "KES 3,200",
      method: "Insurance",
      status: "pending",
      time: "3 hours ago"
    },
    {
      id: 4,
      patient: "Robert Kipchoge",
      amount: "KES 950",
      method: "Airtel Money",
      status: "completed",
      time: "4 hours ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'M-Pesa': return '💰';
      case 'Airtel Money': return '📱';
      case 'Cash': return '💵';
      case 'Insurance': return '🏥';
      default: return '💳';
    }
  };

  const totalRevenue = payments
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + parseInt(p.amount.replace(/[^\d]/g, '')), 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recent Payments
          <Badge variant="outline" className="bg-green-50 text-green-700">
            Total: KES {totalRevenue.toLocaleString()}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <span className="text-lg">{getMethodIcon(payment.method)}</span>
                <div>
                  <div className="font-medium">{payment.patient}</div>
                  <div className="text-sm text-muted-foreground">
                    {payment.method} • {payment.time}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{payment.amount}</div>
                <Badge className={getStatusColor(payment.status)}>
                  {payment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
