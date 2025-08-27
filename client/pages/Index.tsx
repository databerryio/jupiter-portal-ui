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
  History,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Mock data for the dashboard
const systemStats = [
  {
    title: "Active Systems",
    value: "24",
    change: "+2 from last month",
    trend: "up",
    icon: Server,
    color: "text-blue-600",
  },
  {
    title: "Total Users",
    value: "1,247",
    change: "+18% from last month",
    trend: "up",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "Security Score",
    value: "98%",
    change: "+2% from last week",
    trend: "up",
    icon: Shield,
    color: "text-emerald-600",
  },
  {
    title: "System Health",
    value: "99.2%",
    change: "Stable",
    trend: "stable",
    icon: Activity,
    color: "text-green-600",
  },
];

const productsAndServices = [
  {
    id: 1,
    name: "Customer CRM",
    icon: Users,
    color: "bg-blue-500",
    href: "/crm",
  },
  {
    id: 2,
    name: "E-commerce Platform",
    icon: ShoppingCart,
    color: "bg-green-500",
    href: "/ecommerce",
  },
  {
    id: 3,
    name: "Analytics Suite",
    icon: BarChart3,
    color: "bg-purple-500",
    href: "/analytics",
  },
  {
    id: 4,
    name: "Communication Hub",
    icon: Mail,
    color: "bg-orange-500",
    href: "/communication",
  },
  {
    id: 5,
    name: "Project Management",
    icon: Briefcase,
    color: "bg-yellow-500",
    href: "/projects",
  },
  {
    id: 6,
    name: "Cloud Storage",
    icon: Cloud,
    color: "bg-indigo-500",
    href: "/storage",
  },
  {
    id: 7,
    name: "Security Center",
    icon: Shield,
    color: "bg-red-500",
    href: "/security",
  },
  {
    id: 8,
    name: "API Gateway",
    icon: Globe,
    color: "bg-teal-500",
    href: "/api",
  },
];

const recentlyAccessed = [
  {
    id: 1,
    name: "Customer CRM",
    type: "Application",
    lastAccessed: "2h ago",
    icon: Users,
    color: "bg-blue-500",
    href: "/crm/dashboard",
  },
  {
    id: 2,
    name: "Analytics Dashboard",
    type: "Dashboard",
    lastAccessed: "4h ago",
    icon: BarChart3,
    color: "bg-purple-500",
    href: "/analytics/main",
  },
  {
    id: 3,
    name: "User Management",
    type: "Admin Tool",
    lastAccessed: "6h ago",
    icon: Users,
    color: "bg-green-500",
    href: "/admin/users",
  },
  {
    id: 4,
    name: "System Settings",
    type: "Configuration",
    lastAccessed: "1d ago",
    icon: Settings,
    color: "bg-gray-500",
    href: "/settings/system",
  },
  {
    id: 5,
    name: "Security Center",
    type: "Security",
    lastAccessed: "2d ago",
    icon: Shield,
    color: "bg-red-500",
    href: "/security",
  },
  {
    id: 6,
    name: "API Gateway",
    type: "Integration",
    lastAccessed: "3d ago",
    icon: Globe,
    color: "bg-teal-500",
    href: "/api",
  },
];

const systemMonitoringAlerts = [
  {
    id: 1,
    title: "Database Performance",
    message: "Query response time increased",
    severity: "warning",
    timestamp: "5m ago",
    icon: Database,
  },
  {
    id: 2,
    title: "Storage Capacity",
    message: "Main storage at 82%",
    severity: "warning",
    timestamp: "15m ago",
    icon: HardDrive,
  },
  {
    id: 3,
    title: "Network Status",
    message: "All systems operational",
    severity: "success",
    timestamp: "30m ago",
    icon: Wifi,
  },
  {
    id: 4,
    title: "CPU Usage",
    message: "Within normal range",
    severity: "success",
    timestamp: "1h ago",
    icon: Cpu,
  },
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
    "Approved system updates",
  ],
};

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "error":
        return "text-red-600 bg-red-50 border-red-200";
      case "warning":
        return "text-yellow-700 bg-yellow-50 border-yellow-200";
      case "success":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };


  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-portal transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p
                      className={cn(
                        "text-xs flex items-center",
                        stat.trend === "up"
                          ? "text-green-600"
                          : "text-muted-foreground",
                      )}
                    >
                      {stat.trend === "up" && (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      )}
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

      {/* Fluid Layout Sections - Adaptive Grid for All Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">
        {/* Recent Activity - Large section */}
        <div className="lg:col-span-8">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <History className="h-4 w-4 mr-2" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Recently accessed applications and services
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {recentlyAccessed.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.id} to={item.href}>
                      <div className="group p-3 rounded-lg border hover:border-primary transition-all hover:shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div
                            className={cn(
                              "p-2 rounded-lg text-white group-hover:scale-105 transition-transform flex-shrink-0",
                              item.color,
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                              {item.name}
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              {item.lastAccessed}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link
                  to="/recent"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View all recent activity
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Overview - Fixed width sidebar */}
        <div className="lg:w-80 lg:flex-shrink-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <User className="h-4 w-4 mr-2" />
                Account
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {accountDetails.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">
                      {accountDetails.name}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      {accountDetails.role}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                      {accountDetails.accountStatus}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Login</span>
                    <span className="font-medium">
                      {accountDetails.lastLogin}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium truncate ml-2">
                      {accountDetails.email}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <p className="text-xs font-medium text-muted-foreground mb-2">
                    Recent Activity
                  </p>
                  <div className="space-y-1">
                    {accountDetails.recentActivity
                      .slice(0, 2)
                      .map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground truncate">
                            {activity}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <Edit3 className="h-3 w-3 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Third Row: Products & Services and System Monitoring - Fluid Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Products & Services - Takes most space */}
        <div className="flex-1 lg:min-w-0">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Layers className="h-5 w-5 mr-2" />
                    Products & Services
                  </CardTitle>
                  <CardDescription>
                    Quick access to business applications and services
                  </CardDescription>
                </div>
                <Button size="sm" className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Product
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {productsAndServices.slice(0, 6).map((product) => {
                  const Icon = product.icon;

                  return (
                    <Link key={product.id} to={product.href}>
                      <div className="group p-3 rounded-lg border hover:border-primary transition-all hover:shadow-sm">
                        <div className="flex items-center space-x-3">
                          <div
                            className={cn(
                              "p-2 rounded-lg text-white group-hover:scale-105 transition-transform",
                              product.color,
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
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

              <div className="mt-4 pt-4 border-t">
                <Link
                  to="/products-services"
                  className="inline-flex items-center text-sm text-primary hover:underline"
                >
                  View all products & services
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Monitoring - Fixed width sidebar */}
        <div className="lg:w-80 lg:flex-shrink-0">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <MonitorSpeaker className="h-4 w-4 mr-2" />
                Monitoring
              </CardTitle>
              <CardDescription className="text-sm">
                System alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-3">
                {systemMonitoringAlerts.slice(0, 4).map((alert) => {
                  const Icon = alert.icon;
                  return (
                    <div
                      key={alert.id}
                      className={cn(
                        "p-2 rounded-lg border",
                        getSeverityColor(alert.severity),
                      )}
                    >
                      <div className="flex items-start space-x-2">
                        <Icon className="h-3 w-3 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-xs truncate">
                            {alert.title}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">
                            {alert.message}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {alert.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link
                  to="/monitoring"
                  className="text-xs text-primary hover:underline"
                >
                  View all alerts
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
