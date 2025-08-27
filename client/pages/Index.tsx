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
  Search
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
    title: "Revenue",
    value: "$847K",
    change: "+12% from last month",
    trend: "up",
    icon: DollarSign,
    color: "text-purple-600"
  }
];

const productsAndServices = [
  {
    id: 1,
    name: "Customer CRM",
    category: "Sales & Marketing",
    status: "Active",
    users: 142,
    revenue: "$245K",
    icon: Users,
    color: "bg-blue-500",
    description: "Complete customer relationship management platform"
  },
  {
    id: 2,
    name: "E-commerce Platform",
    category: "Commerce",
    status: "Active",
    users: 89,
    revenue: "$387K",
    icon: ShoppingCart,
    color: "bg-green-500",
    description: "Integrated online store and inventory management"
  },
  {
    id: 3,
    name: "Analytics Suite",
    category: "Data & Analytics",
    status: "Active",
    users: 67,
    revenue: "$156K",
    icon: BarChart3,
    color: "bg-purple-500",
    description: "Advanced business intelligence and reporting"
  },
  {
    id: 4,
    name: "Communication Hub",
    category: "Collaboration",
    status: "Active",
    users: 234,
    revenue: "$98K",
    icon: Mail,
    color: "bg-orange-500",
    description: "Unified messaging and communication platform"
  },
  {
    id: 5,
    name: "Project Management",
    category: "Productivity",
    status: "Beta",
    users: 45,
    revenue: "$67K",
    icon: Briefcase,
    color: "bg-yellow-500",
    description: "Task tracking and project collaboration tools"
  },
  {
    id: 6,
    name: "Cloud Storage",
    category: "Infrastructure",
    status: "Active",
    users: 312,
    revenue: "$123K",
    icon: Cloud,
    color: "bg-indigo-500",
    description: "Secure file storage and sharing solution"
  }
];

const pendingTasks = [
  {
    id: 1,
    title: "Complete Q4 Security Audit",
    priority: "high",
    dueDate: "2024-01-15",
    assignee: "Security Team",
    category: "Security",
    progress: 75
  },
  {
    id: 2,
    title: "Update User Access Permissions",
    priority: "medium",
    dueDate: "2024-01-20",
    assignee: "Admin Team",
    category: "Administration",
    progress: 30
  },
  {
    id: 3,
    title: "Deploy New CRM Features",
    priority: "high",
    dueDate: "2024-01-18",
    assignee: "Development Team",
    category: "Development",
    progress: 90
  },
  {
    id: 4,
    title: "Backup Database Systems",
    priority: "medium",
    dueDate: "2024-01-25",
    assignee: "IT Operations",
    category: "Maintenance",
    progress: 0
  },
  {
    id: 5,
    title: "Review Analytics Reports",
    priority: "low",
    dueDate: "2024-01-30",
    assignee: "Analytics Team",
    category: "Reporting",
    progress: 60
  }
];

const accountDetails = {
  name: "Admin User",
  email: "admin@portal.com",
  role: "System Administrator",
  department: "IT Operations",
  location: "San Francisco, CA",
  phone: "+1 (555) 123-4567",
  lastLogin: "2024-01-10 14:30",
  accountStatus: "Active",
  permissions: ["Full Access", "User Management", "System Configuration"]
};

const defaultShortcuts = [
  { id: 1, name: "Add New System", icon: Plus, href: "/systems/new", color: "bg-blue-500" },
  { id: 2, name: "User Management", icon: Users, href: "/users", color: "bg-purple-500" },
  { id: 3, name: "Security Audit", icon: Shield, href: "/admin/security", color: "bg-green-500" },
  { id: 4, name: "System Health", icon: Activity, href: "/systems/health", color: "bg-orange-500" },
  { id: 5, name: "Analytics", icon: BarChart3, href: "/analytics", color: "bg-indigo-500" },
  { id: 6, name: "Settings", icon: Settings, href: "/settings", color: "bg-gray-500" }
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(false);
  const [shortcuts, setShortcuts] = useState(defaultShortcuts);
  const [isEditingShortcuts, setIsEditingShortcuts] = useState(false);
  const [taskFilter, setTaskFilter] = useState("all");

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const filteredTasks = pendingTasks.filter(task => {
    if (taskFilter === "all") return true;
    return task.priority === taskFilter;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-600 bg-green-50";
      case "Beta": return "text-yellow-600 bg-yellow-50";
      case "Maintenance": return "text-orange-600 bg-orange-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
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
        {/* Products and Services - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="flex items-center">
                  <Layers className="h-5 w-5 mr-2" />
                  Products & Services
                </CardTitle>
                <CardDescription>
                  Overview of all business products and services
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {productsAndServices.map((product) => {
                  const Icon = product.icon;
                  return (
                    <div key={product.id} className="p-4 border rounded-lg hover:border-primary transition-colors group">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={cn("p-2 rounded-md text-white", product.color)}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">{product.category}</p>
                          </div>
                        </div>
                        <span className={cn("px-2 py-1 rounded-full text-xs font-medium", getStatusColor(product.status))}>
                          {product.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{product.description}</p>
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {product.users} users
                        </span>
                        <span className="flex items-center font-medium">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {product.revenue}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Link to="/systems" className="text-sm text-primary hover:underline">
                  Manage all products & services
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Details */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-medium">
                  {accountDetails.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-medium">{accountDetails.name}</h4>
                  <p className="text-sm text-muted-foreground">{accountDetails.role}</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{accountDetails.email}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Department</span>
                  <span className="font-medium">{accountDetails.department}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    SF, CA
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                    {accountDetails.accountStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Last Login</span>
                  <span className="font-medium">{accountDetails.lastLogin}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Second Row - Pending Tasks and Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Tasks - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="flex items-center">
                  <CheckSquare className="h-5 w-5 mr-2" />
                  Pending Tasks
                </CardTitle>
                <CardDescription>
                  Tasks requiring attention across all systems
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <select 
                  value={taskFilter} 
                  onChange={(e) => setTaskFilter(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  <option value="all">All Priority</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTasks.map((task) => (
                  <div key={task.id} className="p-4 border rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-sm">{task.title}</h4>
                          <span className={cn("px-2 py-1 rounded-full text-xs font-medium", getPriorityColor(task.priority))}>
                            {task.priority}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            Due: {task.dueDate}
                          </span>
                          <span className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {task.assignee}
                          </span>
                          <span className="px-2 py-1 bg-muted rounded text-xs">
                            {task.category}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{task.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Link to="/tasks" className="text-sm text-primary hover:underline">
                  View all tasks
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customizable Shortcuts */}
        <div>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Quick Shortcuts
              </CardTitle>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsEditingShortcuts(!isEditingShortcuts)}
              >
                <Edit3 className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {shortcuts.map((shortcut) => {
                  const Icon = shortcut.icon;
                  return (
                    <Link key={shortcut.id} to={shortcut.href} className="block">
                      <div className="group p-3 rounded-lg border hover:border-primary transition-colors text-center relative">
                        {isEditingShortcuts && (
                          <div className="absolute -top-2 -right-2">
                            <Button variant="destructive" size="icon" className="h-6 w-6">
                              ×
                            </Button>
                          </div>
                        )}
                        <div className={cn("p-2 rounded-md text-white mx-auto mb-2 w-fit", shortcut.color)}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <h4 className="text-xs font-medium group-hover:text-primary transition-colors">
                          {shortcut.name}
                        </h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              {isEditingShortcuts && (
                <div className="mt-4 pt-4 border-t">
                  <Button variant="outline" size="sm" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Shortcut
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* System Alerts */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3 p-2 bg-yellow-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Storage Warning</p>
                  <p className="text-xs text-muted-foreground">Database approaching 80% capacity</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-2 bg-green-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Backup Complete</p>
                  <p className="text-xs text-muted-foreground">Daily backup finished successfully</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-2 bg-blue-50 rounded-lg">
                <Bell className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Update Available</p>
                  <p className="text-xs text-muted-foreground">CRM system update ready</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
