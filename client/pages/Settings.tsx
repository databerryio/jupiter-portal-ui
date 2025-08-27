import { Settings } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export default function SettingsPage() {
  const suggestions = [
    "Portal configuration and preferences",
    "Theme and appearance customization",
    "Notification and alert settings",
    "Integration and API configurations",
    "Backup and recovery settings",
    "Performance and optimization tuning",
    "Language and localization options"
  ];

  return (
    <PlaceholderPage
      title="Settings & Configuration"
      description="Portal-wide settings and configuration management"
      icon={<Settings className="h-12 w-12 text-gray-600" />}
      suggestions={suggestions}
    />
  );
}
