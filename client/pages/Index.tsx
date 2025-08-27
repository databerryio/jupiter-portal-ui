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
  RefreshCw,
  Edit3,
  Star,
  CreditCard,
  Globe,
  ShoppingCart,
  Mail,
  FileText,
  Calendar,
  Bell,
  User,
  MapPin,
  Phone,
  Briefcase,
  Zap,
  Cloud,
  Lock,
  Smartphone,
  Headphones,
  DollarSign,
  PieChart,
  Layers,
  CheckSquare,
  AlertCircle,
  Filter,
  Search,
  Play,
  Pause,
  MoreHorizontal,
  ExternalLink,
  Wrench,
  MonitorSpeaker,
  FileX,
  TrendingDown,
  Wifi,
  HardDrive,
  Cpu,
  Eye,
  History
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
    value: "99.2%",
    change: "Stable",
    trend: "stable",
    icon: Activity,
    color: "text-green-600"
  }
];

const productsAndServices = [
  {
    id: 1,
    name: "Customer CRM",
    icon: Users,
    color: "bg-blue-500",
    href: "/crm"
  },
  {
    id: 2,
    name: "E-commerce Platform",
    icon: ShoppingCart,
    color: "bg-green-500",
    href: "/ecommerce"
  },
  {
    id: 3,
    name: "Analytics Suite",
    icon: BarChart3,
    color: "bg-purple-500",
    href: "/analytics"
  },
  {
    id: 4,
    name: "Communication Hub",
    icon: Mail,
    color: "bg-orange-500",
    href: "/communication"
  },
  {
    id: 5,
    name: "Project Management",
    icon: Briefcase,
    color: "bg-yellow-500",
    href: "/projects"
  },
  {
    id: 6,
    name: "Cloud Storage",
    icon: Cloud,
    color: "bg-indigo-500",
    href: "/storage"
  },
  {
    id: 7,
    name: "Security Center",
    icon: Shield,
    color: "bg-red-500",
    href: "/security"
  },
  {
    id: 8,
    name: "API Gateway",
    icon: Globe,
    color: "bg-teal-500",
    href: "/api"
  }
];

const recentlyAccessed = [
  {
    id: 1,
    name: "Customer CRM",
    type: "Application",
    lastAccessed: "2 hours ago",
    icon: Users,
    color: "bg-blue-500",
    href: "/crm/dashboard"
  },
  {
    id: 2,
    name: "Analytics Dashboard",
    type: "Dashboard",
    lastAccessed: "4 hours ago",
    icon: BarChart3,
    color: "bg-purple-500",
    href: "/analytics/main"
  },
  {
    id: 3,
    name: "User Management",
    type: "Admin Tool",
    lastAccessed: "6 hours ago",
    icon: Users,
    color: "bg-green-500",
    href: "/admin/users"
  },
  {
    id: 4,
    name: "System Settings",
    type: "Configuration",
    lastAccessed: "1 day ago",
    icon: Settings,
    color: "bg-gray-500",
    href: "/settings/system"
  }
];

const systemMonitoringAlerts = [
  {
    id: 1,
    title: "Database Performance",
    message: "Query response time increased by 15%",
    severity: "warning",
    timestamp: "5 minutes ago",
    source: "Database Monitor",
    icon: Database
  },
  {
    id: 2,
    title: "Storage Capacity",
    message: "Main storage at 82% capacity",
    severity: "warning",
    timestamp: "15 minutes ago",
    source: "Storage Monitor",
    icon: HardDrive
  },
  {
    id: 3,
    title: "Network Connectivity",
    message: "All systems operational",
    severity: "success",
    timestamp: "30 minutes ago",
    source: "Network Monitor",
    icon: Wifi
  },
  {
    id: 4,
    title: "CPU Usage",
    message: "Average CPU usage within normal range",
    severity: "success",
    timestamp: "1 hour ago",
    source: "System Monitor",
    icon: Cpu
  },
  {
    id: 5,
    title: "Memory Usage",
    message: "RAM utilization at 65%",
    severity: "success",
    timestamp: "2 hours ago",
    source: "Memory Monitor",
    icon: Server
  },
  {
    id: 6,
    title: "SSL Certificate",
    message: "SSL certificates renewed successfully",
    severity: "success",
    timestamp: "3 hours ago",
    source: "Security Monitor",
    icon: Shield
  }
];

const pendingWorkOrders = [
  {
    id: 1,
    title: "CRM Update",
    priority: "High",
    assignee: "DevOps",
    dueDate: "Jan 15",
    progress: 75,
    icon: Wrench
  },
  {
    id: 2,
    title: "DB Maintenance",
    priority: "Medium",
    assignee: "DBA Team",
    dueDate: "Jan 20",
    progress: 30,
    icon: Database
  },
  {
    id: 3,
    title: "Security Audit",
    priority: "High",
    assignee: "Security",
    dueDate: "Jan 18",
    progress: 60,
    icon: Shield
  }
];

const accountDetails = {
  name: "Admin User",
  email: "admin@portal.com",
  role: "System Administrator",
  department: "IT Operations",
  lastLogin: "Today, 2:30 PM",
  accountStatus: "Active",
  recentActivity: [
    "Updated user permissions",
    "Reviewed security logs",
    "Approved system updates"
  ]
};

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "error": return "text-red-600 bg-red-50 border-red-200";
      case "warning": return "text-yellow-700 bg-yellow-50 border-yellow-200";
      case "success": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600 bg-red-50";
      case "Medium": return "text-yellow-600 bg-yellow-50";
      case "Low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portal Console</h1>
          <p className="text-muted-foreground text-lg">
            Centralized management for products, services, and operations
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
            <RefreshCw className={cn("h-4 w-4 mr-2", isLoading && "animate-spin")} />
            Refresh
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-portal transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
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
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recently Accessed - Moved Above Products & Services */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <History className="h-4 w-4 mr-2" />
                Recent
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-3">
                {recentlyAccessed.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.id} to={item.href}>
                      <div className="flex items-center space-x-3 p-2 rounded hover:bg-muted transition-colors group">
                        <div className={cn("p-1.5 rounded text-white", item.color)}>
                          <Icon className="h-3 w-3" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                            {item.name}
                          </h5>
                          <p className="text-xs text-muted-foreground">{item.lastAccessed}</p>
                        </div>
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products and Services with Logo Left, Name Right */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2" />
                Products & Services
              </CardTitle>
              <CardDescription>
                Quick access to business applications and services
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {productsAndServices.map((product) => {
                  const Icon = product.icon;
                  
                  return (
                    <Link key={product.id} to={product.href}>
                      <div className="group p-3 rounded-lg border hover:border-primary transition-all hover:shadow-sm">
                        <div className="flex items-center space-x-3">
                          {/* Logo on the left */}
                          <div className={cn("p-2 rounded-lg text-white group-hover:scale-105 transition-transform", product.color)}>
                            <Icon className="h-5 w-5" />
                          </div>
                          {/* Product name on the right */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                              {product.name}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Account Details */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <User className="h-4 w-4 mr-2" />
                Account Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {accountDetails.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{accountDetails.name}</h4>
                    <p className="text-xs text-muted-foreground truncate">{accountDetails.role}</p>
                  </div>
                </div>
                
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{accountDetails.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Department</span>
                    <span className="font-medium">{accountDetails.department}</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                      {accountDetails.accountStatus}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Login</span>
                    <span className="font-medium">{accountDetails.lastLogin}</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Recent Activity</p>
                  <div className="space-y-1">
                    {accountDetails.recentActivity.slice(0, 2).map((activity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Grid: System Monitoring (3 units) + Work Orders (1 unit) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* System Monitoring - Takes 3 grid units */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <MonitorSpeaker className="h-5 w-5 mr-2" />
                System Monitoring
              </CardTitle>
              <CardDescription>
                Real-time system health and performance alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {systemMonitoringAlerts.map((alert) => {
                  const Icon = alert.icon;
                  return (
                    <div key={alert.id} className={cn("p-3 rounded-lg border", getSeverityColor(alert.severity))}>
                      <div className="flex items-start space-x-3">
                        <Icon className="h-4 w-4 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm">{alert.title}</h4>
                            <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{alert.message}</p>
                          <p className="text-xs font-medium">{alert.source}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link to="/monitoring" className="text-sm text-primary hover:underline">
                  View all monitoring alerts
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Work Orders - Takes 1 grid unit */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Wrench className="h-4 w-4 mr-2" />
                Work Orders
              </CardTitle>
              <CardDescription className="text-sm">
                Pending tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-3">
                {pendingWorkOrders.map((order) => {
                  const Icon = order.icon;
                  return (
                    <div key={order.id} className="p-2 border rounded-lg hover:border-primary transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-3 w-3" />
                          <h4 className="font-medium text-xs truncate">{order.title}</h4>
                        </div>
                        <span className={cn("px-1.5 py-0.5 rounded-full text-xs font-medium", getPriorityColor(order.priority))}>
                          {order.priority}
                        </span>
                      </div>
                      
                      <div className="text-xs text-muted-foreground mb-1">
                        <div>{order.assignee}</div>
                        <div>Due: {order.dueDate}</div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-muted rounded-full h-1">
                          <div 
                            className="bg-primary h-1 rounded-full transition-all" 
                            style={{ width: `${order.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{order.progress}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link to="/work-orders" className="text-xs text-primary hover:underline">
                  View all
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
