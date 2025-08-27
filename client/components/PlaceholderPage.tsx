import { ReactNode } from "react";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: ReactNode;
  suggestions?: string[];
}

export function PlaceholderPage({ 
  title, 
  description, 
  icon = <Construction className="h-12 w-12 text-muted-foreground" />,
  suggestions = []
}: PlaceholderPageProps) {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>

        {/* Main placeholder content */}
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="flex justify-center mb-4">
              {icon}
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-lg">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                This section is currently under development. Check back soon for new features and functionality.
              </p>
              
              {suggestions.length > 0 && (
                <div className="text-left space-y-3">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    Planned Features:
                  </h4>
                  <ul className="space-y-2">
                    {suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Want to see this feature implemented? Continue prompting to help us build it!
                </p>
                <Button asChild>
                  <Link to="/">Return to Dashboard</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
