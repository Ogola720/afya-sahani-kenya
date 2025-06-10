
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hospital, User, Lock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface LoginFormProps {
  onLogin: (role: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, role });
    onLogin(role || "doctor");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
            <Hospital className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Afya Sahani HMS</CardTitle>
          <p className="text-muted-foreground">Hospital Management System - Kenya</p>
          <div className="kenya-flag-accent mt-4"></div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email / Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="doctor@hospital.ke"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="doctor">Doctor</SelectItem>
                  <SelectItem value="nurse">Nurse</SelectItem>
                  <SelectItem value="receptionist">Receptionist</SelectItem>
                  <SelectItem value="pharmacist">Pharmacist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full medical-gradient text-white">
              Sign In
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Demo Credentials:</p>
              <p>Email: demo@hospital.ke | Password: demo123</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
