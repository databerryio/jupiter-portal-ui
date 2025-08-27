import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Server,
  Users,
  Shield,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  BarChart3,
  Settings,
  Plus,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Mock data for the dashboard
const systemStats = [
  {
    title: "Active Systems",
    value: "24",
    change: "+2 from last month",
    trend: "up",
    icon: Server,
    color: "text-blue-600"
  },
  {
    title: "Total Users",
    value: "1,247",
    change: "+18% from last month",
    trend: "up",
    icon: Users,
    color: "text-green-600"
  },
  {
    title: "Security Score",
    value: "98%",
    change: "+2% from last week",
    trend: "up",
    icon: Shield,
    color: "text-emerald-600"
  },
  {
    title: "System Health",
    value: "99.9%",
    change: "Stable",
    trend: "stable",
    icon: Activity,
    color: "text-green-600"
  }
];

const recentActivities = [
  {
    id: 1,
    type: "system",
    title: "New CRM system integrated",
    description: "Customer relationship management system successfully connected",
    time: "2 hours ago",
    status: "success",
    icon: CheckCircle
  },
  {
    id: 2,
    type: "security",
    title: "Security scan completed",
    description: "Monthly security audit finished with no critical issues",
    time: "4 hours ago",
    status: "success",
    icon: Shield
  },
  {
    id: 3,
    type: "maintenance",
    title: "Database maintenance scheduled",
    description: "Routine maintenance planned for this weekend",
    time: "6 hours ago",
    status: "pending",
    icon: Clock
  },
  {
    id: 4,
    type: "alert",
    title: "Storage usage warning",
    description: "Database storage is approaching 80% capacity",
    time: "8 hours ago",
    status: "warning",
    icon: AlertTriangle
  }
];

const quickActions = [
  {
    title: "Add New System",
    description: "Integrate a new system into the portal",
    icon: Plus,
    href: "/systems/new",
    color: "bg-blue-500 hover:bg-blue-600"
  },
  {
    title: "System Health Check",
    description: "Run comprehensive health diagnostics",
    icon: Activity,
    href: "/systems/health",
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    title: "User Management",
    description: "Manage users and permissions",
    icon: Users,
    href: "/users",
    color: "bg-purple-500 hover:bg-purple-600"
  },
  {
    title: "Analytics Dashboard",
    description: "View detailed system analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "bg-orange-500 hover:bg-orange-600"
  }
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portal Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Centralized management console for all your systems
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className={cn("h-4 w-4 mr-2", isLoading && "animate-spin")} />
            Refresh
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add System
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-portal transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={cn(
                      "text-xs flex items-center",
                      stat.trend === "up" ? "text-green-600" : "text-muted-foreground"
                    )}>
                      {stat.trend === "up" && <TrendingUp className="h-3 w-3 mr-1" />}
                      {stat.change}
                    </p>
                  </div>
                  <div className={cn("p-3 rounded-lg bg-muted", stat.color)}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and system management actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link key={index} to={action.href} className="block">
                      <div className="group p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer">
                        <div className="flex items-start space-x-3">
                          <div className={cn("p-2 rounded-md text-white", action.color)}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                              {action.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {action.description}
                            </p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Latest system events and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={cn(
                        "p-2 rounded-full",
                        activity.status === "success" && "bg-green-100 text-green-600",
                        activity.status === "warning" && "bg-yellow-100 text-yellow-600",
                        activity.status === "pending" && "bg-blue-100 text-blue-600"
                      )}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link to="/activities" className="text-sm text-primary hover:underline">
                  View all activities
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2" />
              Connected Systems
            </CardTitle>
            <CardDescription>
              Overview of all integrated systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Customer CRM</span>
                </div>
                <span className="text-sm text-muted-foreground">Active</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Inventory Management</span>
                </div>
                <span className="text-sm text-muted-foreground">Active</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium">Analytics Platform</span>
                </div>
                <span className="text-sm text-muted-foreground">Maintenance</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Payment Gateway</span>
                </div>
                <span className="text-sm text-muted-foreground">Active</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <Link to="/systems" className="text-sm text-primary hover:underline">
                Manage all systems
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2" />
              Performance Metrics
            </CardTitle>
            <CardDescription>
              Key performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">System Uptime</span>
                  <span className="text-sm text-muted-foreground">99.9%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "99.9%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Response Time</span>
                  <span className="text-sm text-muted-foreground">142ms avg</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Error Rate</span>
                  <span className="text-sm text-muted-foreground">0.1%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-red-600 h-2 rounded-full" style={{ width: "1%" }}></div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <Link to="/analytics" className="text-sm text-primary hover:underline">
                View detailed analytics
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
