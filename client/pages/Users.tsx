import { Users } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function UsersPage() {
  const suggestions = [
    "User account management and provisioning",
    "Role and permission assignment",
    "User activity monitoring and logs",
    "Bulk user operations and imports",
    "Single sign-on (SSO) integration",
    "User onboarding and offboarding workflows",
    "Access request and approval system"
  ];

  return (
    <PlaceholderPage
      title="User Management"
      description="Centralized user administration and access control"
      icon={<Users className="h-12 w-12 text-purple-600" />}
      suggestions={suggestions}
    />
  );
}
