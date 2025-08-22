
'use client'
import {
  ArrowRight,
  Layout,
  MousePointer,
  Palette,
  Smartphone,
  Type,
  Code
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const components = [
  {
    href: "/design/magicui/backgrounds",
    name: "Backgrounds",
    description: "Stunning visual effects and background patterns",
    icon: Layout,
    color: "bg-green-100 dark:bg-green-900/50",
    textColor: "text-green-600 dark:text-green-300",
  },
  {
    href: "/design/magicui/interactive",
    name: "Interactive",
    description: "Engaging UI components that respond to user interactions",
    icon: MousePointer,
    color: "bg-blue-100 dark:bg-blue-900/50",
    textColor: "text-blue-600 dark:text-blue-300",
  },
  {
    href: "/design/magicui/text",
    name: "Text Effects",
    description: "Beautiful typography and text animations",
    icon: Type,
    color: "bg-purple-100 dark:bg-purple-900/50",
    textColor: "text-purple-600 dark:text-purple-300",
  },
  {
    href: "/design/magicui/devices",
    name: "Device Mocks",
    description: "Realistic device mockups for showcasing your applications",
    icon: Smartphone,
    color: "bg-yellow-100 dark:bg-yellow-900/50",
    textColor: "text-yellow-600 dark:text-yellow-300",
  },
  {
    href: "/design/magicui/utilities",
    name: "Utilities",
    description: "Helpful components for common UI patterns",
    icon: Code,
    color: "bg-red-100 dark:bg-red-900/50",
    textColor: "text-red-600 dark:text-red-300",
  },
];

export function MagicUICardGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component) => (
        <Link href={component.href} key={component.name} className="group">
          <Card className="flex h-full flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl hover:shadow-primary/20">
            <CardHeader>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${component.color}`}
                >
                  <component.icon
                    className={`h-6 w-6 ${component.textColor}`}
                  />
                </div>
                <CardTitle className="font-headline text-2xl group-hover:text-primary">
                  {component.name}
                </CardTitle>
              </div>
              <p className="text-muted-foreground">{component.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-primary transition-all duration-300 group-hover:gap-2">
                View components <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
